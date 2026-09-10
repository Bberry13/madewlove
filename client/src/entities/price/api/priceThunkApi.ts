import { AxiosError } from "axios";
import { axiosInstance } from "../../../shared/lib/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  IApiResponseSuccess,
  IApiResponseReject,
} from "../../../shared/types";
import type { TypePrice } from "../model/TypePrice";
import { PRICE_THUNKS_TYPES } from "../../../shared/enums/priceThunksTypes";
import { PRICE_THUNKS_ROUTES } from "../../../shared/enums/priceThunksRoutes";

export const getAllPriceThunk = createAsyncThunk<
  IApiResponseSuccess<TypePrice[][]>,
  void,
  { rejectValue: IApiResponseReject }
>(PRICE_THUNKS_TYPES.GET_PRICE, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<IApiResponseSuccess<TypePrice[]>>(
      PRICE_THUNKS_ROUTES.GET_PRICE
    );
    // 1 РООЖДЕНИЕ
    // с 2 индекса начинабтся роддома?
    const pattern = [1, 4, 3, 3, 3, 3, 2, 2, 3, 1, 2];
    const result: TypePrice[][] = [];
    let i = 0;
    const arr = data.data;
    for (const count of pattern) {
      if (i >= arr.length) break;
      result.push(arr.slice(i, i + count));
      i += count;
    }

    // Семейный блок (priceGroupIndex = 8)
    // Требование: 5 карточек — старые «HOME» и «STUDIO» + новые «STREET», «НОВОГОДНИЙ», «РЕПОРТАЖ».
    const familyTitles = new Set([
      "Пакет «HOME»",
      "Пакет «STUDIO»",
      "Пакет «STREET»",
      "Пакет «НОВОГОДНИЙ»",
      "Пакет «РЕПОРТАЖ»",
    ]);
    const familyFromApi = arr.filter((p) => familyTitles.has(p.package_title));
    if (familyFromApi.length) {
      // Сохраняем порядок: сначала старые (HOME, STUDIO), затем новые добавленные по времени.
      const order = [
        "Пакет «HOME»",
        "Пакет «STUDIO»",
        "Пакет «STREET»",
        "Пакет «НОВОГОДНИЙ»",
        "Пакет «РЕПОРТАЖ»",
      ];
      result[8] = order
        .map((title) => familyFromApi.find((p) => p.package_title === title))
        .filter((p): p is TypePrice => Boolean(p));
    }

    const fixed = (() => {
      const used = new Set<string>();
      const toId = (p: TypePrice) => String(p.id);
      const priceKey = (p: TypePrice) => (p.price_title || "").replace(/\s/g, "");
      const titleLower = (p: TypePrice) => (p.package_title || "").toLowerCase();
      const infoLower = (p: TypePrice) => {
        try {
          const parsed = JSON.parse(p.info_body);
          if (Array.isArray(parsed)) {
            return parsed.join(" ").toLowerCase();
          }
        } catch {
          // ignore
        }
        return (p.info_body || "").toLowerCase();
      };
      const byIdAsc = (a: TypePrice, b: TypePrice) => Number(a.id) - Number(b.id);
      const pick = (pred: (p: TypePrice) => boolean) => {
        const items = arr.filter((p) => !used.has(toId(p)) && pred(p)).sort(byIdAsc);
        items.forEach((p) => used.add(toId(p)));
        return items;
      };

      const out: TypePrice[][] = [];

      // 0: Рождение
      out[0] = pick(
        (p) =>
          priceKey(p).includes("запрос") ||
          infoLower(p).includes("родов")
      );

      // 1: Беременность (HOME / STANDARD / PREMIUM)
      const pregnancyTitles = ["home", "standard", "premium"];
      out[1] = pick((p) => {
        const t = titleLower(p);
        return (
          pregnancyTitles.some((k) => t.includes(k)) &&
          (priceKey(p) === "15.000" || priceKey(p) === "25.000" || priceKey(p) === "50.000")
        );
      });

      // 2-5: Выписки (CKB / Лапино / MD / TownExtra) — по "выписки" и порядку id
      const extractsAll = pick(
        (p) => infoLower(p).includes("выписк") && !titleLower(p).includes("newborn")
      );
      extractsAll.sort(byIdAsc);
      out[2] = extractsAll.slice(0, 3);
      out[3] = extractsAll.slice(3, 6);
      out[4] = extractsAll.slice(6, 9);
      out[5] = extractsAll.slice(9, 12);

      // 6: Ньюборн (NATURAL / CLASSIC)
      out[6] = pick((p) => titleLower(p).includes("newborn"));

      // 7: Крещение
      out[7] = pick((p) => infoLower(p).includes("крещ") || infoLower(p).includes("храм"));

      // 8: Семейная фотосессия (5 пакетов)
      const familyOrder = ["home", "studio", "street", "новогод", "репортаж"];
      const familyItems = pick((p) => {
        const t = titleLower(p);
        return (
          t.includes("пакет") &&
          familyOrder.some((k) => t.includes(k))
        );
      });
      out[8] = familyOrder
        .map((key) => familyItems.find((p) => titleLower(p).includes(key)))
        .filter((p): p is TypePrice => Boolean(p));

      // 9: Годовасие (один пакет)
      out[9] = pick(
        (p) =>
          titleLower(p).includes("пакет") &&
          priceKey(p) === "25.000" &&
          !infoLower(p).includes("выписк")
      );

      // 10: Фото альбомы
      out[10] = pick((p) => titleLower(p).includes("альбом"));

      // Остатки, если есть
      const leftovers = arr.filter((p) => !used.has(toId(p))).sort(byIdAsc);
      if (leftovers.length) {
        out[10] = [...out[10], ...leftovers];
      }

      return out;
    })();

    return { ...data, data: fixed };
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: "Ошибка при получении списка цен",
        data: null,
        error: err.message || "Unknown error",
      }
    );
  }
});

export const updatePriceThunk = createAsyncThunk<
  IApiResponseSuccess<TypePrice>,
  TypePrice,
  { rejectValue: IApiResponseReject }
>(PRICE_THUNKS_TYPES.UPDATE_PRICE, async (price, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.put<IApiResponseSuccess<TypePrice>>(
      `${PRICE_THUNKS_ROUTES.GET_PRICE}/${price.id}`,
      price
    );
    return data;
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: "Ошибка при обновлении цены",
        data: null,
        error: err.message || "Unknown error",
      }
    );
  }
});
