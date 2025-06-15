import { AxiosError } from 'axios';
import { axiosInstance } from '../../../shared/lib/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type {
  IApiResponseSuccess,
  IApiResponseReject,
} from '../../../shared/types';
import type { TypePrice } from '../model/TypePrice';
import { PRICE_THUNKS_TYPES } from '../../../shared/enums/priceThunksTypes';
import { PRICE_THUNKS_ROUTES } from '../../../shared/enums/priceThunksRoutes';

export const getAllPriceThunk = createAsyncThunk<
  IApiResponseSuccess<TypePrice[][]>,
  void,
  { rejectValue: IApiResponseReject }
>(PRICE_THUNKS_TYPES.GET_PRICE, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<IApiResponseSuccess<TypePrice[]>>(
      PRICE_THUNKS_ROUTES.GET_PRICE
    );
    const pattern = [3, 1, 3, 3, 3, 3, 2, 2, 3, 1, 2];
    const result: TypePrice[][] = [];
    let i = 0;
    const arr = data.data;
    for (const count of pattern) {
      if (i >= arr.length) break;
      result.push(arr.slice(i, i + count));
      i += count;
    }
    return { ...data, data: result };
  } catch (error) {
    const err = error as AxiosError<IApiResponseReject>;
    return rejectWithValue(
      err.response?.data || {
        statusCode: 500,
        message: 'Ошибка при получении списка цен',
        data: null,
        error: err.message || 'Unknown error',
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
        message: 'Ошибка при обновлении цены',
        data: null,
        error: err.message || 'Unknown error',
      }
    );
  }
});
