import { getAllPriceThunk } from "@/entities/price/api/priceThunkApi";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React, { useEffect } from "react";
import type { TypePrice } from "@/entities/price/model/TypePrice";
import styles from "../styles/PricePage.module.css";
import { FAQ } from "@/features/FAQ/FAQ";
import { useNavigate } from "react-router";

type PricePageProps = {
    title: string; // Заголовок страницы (например, "Крещение")
    introText: string; // Вступительный текст
    faqData: { question: string; answer: string }[]; // Данные для FAQ
    priceGroupIndex: number; // Индекс группы цен в массиве prices
    photos: string[]; // Массив путей к изображениям для карточек
  };

  export function CommonPricePage({
    title,
    introText,
    faqData,
    priceGroupIndex,
    photos,
  }: PricePageProps): React.JSX.Element {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { prices, isLoading, error } = useAppSelector((state) => state.price);
  
    useEffect(() => {
      dispatch(getAllPriceThunk());
    }, [dispatch]);
  
    if (isLoading) {
      return <div className={styles.loading}>Загрузка</div>;
    }
  
    if (!prices.length) {
      return <div className={styles.empty}>Цены не найдены</div>;
    }
  
    if (error) {
      return <div className={styles.error}>Ошибка: {error}</div>;
    }
  
    const priceGroup = prices[priceGroupIndex];
  
    return (
      <div className={styles.page}>
        <div className={styles.mainTitle}>
          <h1>{title}</h1>
        </div>
        <div className={styles.priceContainer}>
          {priceGroup.map((price: TypePrice, index: number) => {
            let infoBodyArray: string[];
            try {
              infoBodyArray = JSON.parse(price.info_body);
            } catch (e) {
              console.error("Ошибка парсинга info_body:", e);
              infoBodyArray = [];
            }
  
            return (
              <div key={price.id} className={styles.priceCard}>
                <div className={styles.imageContainer}>
                  <img
                    src={photos[index % photos.length]} // Циклическое использование изображений
                    alt={price.package_title}
                    className={styles.cardImage}
                  />
                </div>
                <h2 className={styles.cardTitle}>{price.package_title}</h2>
                <h3 className={styles.priceTitle}>{price.price_title}</h3>
                <ul className={styles.infoBody}>
                  {infoBodyArray.map((item, idx) => (
                    <li key={idx} className={styles.infoItem}>
                      {item.trim()}
                    </li>
                  ))}
                </ul>
                <div className={styles.buttonsContainer}>
                  <button
                    className={styles.cardButton}
                    onClick={() => navigate("/contacts")}
                  >
                    Связаться
                  </button>
                  <button className={styles.cardButton}>Посмотреть фото</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.divider} />
        <div className={styles.intro}>
          <p>{introText}</p>
        </div>
        <FAQ faq={faqData} />
      </div>
    );
  }