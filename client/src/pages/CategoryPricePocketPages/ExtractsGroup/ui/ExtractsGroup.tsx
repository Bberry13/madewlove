import React from "react";

import styles from "./ExtractsGroup.module.css";

// Импортируем все фотографии
import mainPagePhoto1 from "@/assets/MainPage/Photos/mainPagePhoto1.jpg";
import mainPagePhoto2 from "@/assets/MainPage/Photos/mainPagePhoto2.jpg";
import mainPagePhoto3 from "@/assets/MainPage/Photos/mainPagePhoto3.jpg";
import mainPagePhoto4 from "@/assets/MainPage/Photos/mainPagePhoto4.jpg";
import { useNavigate } from "react-router";
// import { CLIENT_ROUTING } from "@/shared/enums/clientRouting";

// Объект с данными для карточек
const priceCardsData = {
  ckb: {
    title: "Роддом ЦКБ",
    photo: mainPagePhoto1,
    buttonText: "Выбрать",
    path: "/price/extracts/ckb",
  },
  lapino: {
    title: "Роддом Лапино",
    photo: mainPagePhoto2,
    buttonText: "Выбрать",
    path: "/price/extracts/lapino",
  },
  md: {
    title: "MD GROUP",
    photo: mainPagePhoto3,
    buttonText: "Выбрать",
    path: "/price/extracts/md",
  },
  townextra: {
    title: "Городские роддома",
    photo: mainPagePhoto4,
    buttonText: "Выбрать",
    path: "/price/extracts/townextra",
  }
};

export function ExtractsGroup(): React.JSX.Element {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.priceCardsContainer}>
      {Object.entries(priceCardsData).map(([key, data]) => (
        <div key={key} className={styles.priceCard}>
          <div className={styles.imageContainer}>
            <img
              src={data.photo}
              alt={data.title}
              className={styles.cardImage}
            />
          </div>
          <h2 className={styles.cardTitle}>{data.title}</h2>
          <div className={styles.buttonsContainer}>
            <button
              className={styles.cardButton}
              onClick={() => handleClick(data.path)}
            >
              {data.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}