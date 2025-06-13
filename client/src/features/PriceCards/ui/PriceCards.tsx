import React, { useEffect } from "react";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { getAllPriceThunk } from "@/entities/price/api/priceThunkApi";
import type { TypePrice } from "@/entities/price/model/TypePrice";
import mainPhoto from "@/assets/MainPage/Photos/mainPagePhoto4.jpg";
import "./PriceCards.css";

export function PriceCards(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const { prices, isLoading, error } = useAppSelector((state) => state.price);

  // Загружаем цены при монтировании компонента
  useEffect(() => {
    dispatch(getAllPriceThunk());
  }, [dispatch]);

  // Функция для преобразования info_body в массив строк
  const parseInfoBody = (infoBody: string): string[] => {
    return infoBody
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  };

  if (isLoading) {
    return <div className="loading">Загрузка...</div>;
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>;
  }

  if (!prices.length) {
    return <div className="empty">Цены не найдены</div>;
  }

  return (
    <div className="price-cards-container">
      {prices.map((group, groupIndex) => (
        <div key={`group-${groupIndex}`} className="price-group">
          {group.map((price: TypePrice) => (
            <div key={price.id} className="price-card">
              <div>
                <img
                  src={mainPhoto}
                  alt="Фотография скоро появится"
                  style={{ height: "40vh" }}
                />
              </div>
              <h2 className="package-title">{price.package_title}</h2>
              <h3 className="price-title">{price.price_title}</h3>
              <ul className="info-body">
                {parseInfoBody(price.info_body).map((item, index) => (
                  <li key={index} className="info-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
