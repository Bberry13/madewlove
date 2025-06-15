import React from "react";
// import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
// import { useAppSelector } from "@/shared/hooks/useAppSelector";
// import { getAllPriceThunk } from "@/entities/price/api/priceThunkApi";
// import type { TypePrice } from "@/entities/price/model/TypePrice";

import "./PriceCards.css";

// Импортируем все фотографии
import mainPagePhoto1 from "@/assets/MainPage/Photos/mainPagePhoto1.jpg";
import mainPagePhoto2 from "@/assets/MainPage/Photos/mainPagePhoto2.jpg";
import mainPagePhoto3 from "@/assets/MainPage/Photos/mainPagePhoto3.jpg";
import mainPagePhoto4 from "@/assets/MainPage/Photos/mainPagePhoto4.jpg";
import mainPagePhoto5 from "@/assets/MainPage/Photos/mainPagePhoto5.jpg";
import mainPagePhoto6 from "@/assets/MainPage/Photos/mainPagePhoto6.jpg";
import mainPagePhoto7 from "@/assets/MainPage/Photos/mainPagePhoto7.jpg";
import mainPagePhoto8 from "@/assets/MainPage/Photos/mainPagePhoto8.jpg";
import { useNavigate } from "react-router";
// import { CLIENT_ROUTING } from "@/shared/enums/clientRouting";

// Объект с данными для карточек
const priceCardsData = {
  pregnancy: {
    title: "Беременность",
    photo: mainPagePhoto1,
    buttonText: "Узнать стоимость",
    path: "/price/pregnancy",
  },
  // 1 индекс в массиве для этой категории, остальные по порядку
  // цена будет вырезана , чтобы ноль не светился
  birth: {
    title: "Рождение",
    photo: mainPagePhoto2,
    buttonText: "Узнать стоимость",
    path: "/price/birth",
  },
  extracts: {
    title: "Выписки",
    photo: mainPagePhoto3,
    buttonText: "Выбрать роддом",
    path: "/price/extracts",
  },
  newborn: {
    title: "Ньюборн",
    photo: mainPagePhoto4,
    buttonText: "Узнать стоимость",
    path: "/price/newborn",
  },
  baptism: {
    title: "Крещение",
    photo: mainPagePhoto5,
    buttonText: "Узнать стоимость",
    path: "/price/baptism",
  },
  familyPhotoShoot: {
    title: "Семейная фотоссесия",
    photo: mainPagePhoto6,
    buttonText: "Узнать стоимость",
    path: "/price/family",
  },
  oneYearPhoto: {
    title: "Годовасие",
    photo: mainPagePhoto7,
    buttonText: "Узнать стоимость",
    path: "/price/one-year",
  },
  photoBooks: {
    title: "Фотокниги",
    photo: mainPagePhoto8,
    buttonText: "Узнать стоимость",
    path: "/price/photo-books",
  },
};

export function PriceCards(): React.JSX.Element {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="price-cards-container">
      {Object.entries(priceCardsData).map(([key, data]) => (
        <div key={key} className="price-card">
          <div className="image-container">
            <img
              src={data.photo}
              alt={data.title}
              style={{ height: "30vh", width: "100%", objectFit: "cover" }}
            />
          </div>
          <h2 className="card-title">{data.title}</h2>
          <button
            className="card-button"
            onClick={() => handleClick(data.path)}
          >
            {data.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}
