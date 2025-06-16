import { getAllPriceThunk } from "@/entities/price/api/priceThunkApi";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React, { useEffect } from "react";
import type { TypePrice } from "@/entities/price/model/TypePrice";
import styles from "../../shared/styles/PricePage.module.css";
import { FAQ } from "@/features/FAQ/FAQ";
import { familyFAQData } from "../model/FAQ_data";

import mainPagePhoto1 from "@/assets/MainPage/Photos/mainPagePhoto1.jpg";
import mainPagePhoto2 from "@/assets/MainPage/Photos/mainPagePhoto2.jpg";
import mainPagePhoto3 from "@/assets/MainPage/Photos/mainPagePhoto3.jpg";
import { useNavigate } from "react-router";

const photos = [mainPagePhoto1, mainPagePhoto2, mainPagePhoto3];

export function FamilyPricePage(): React.JSX.Element {
  const navigate = useNavigate()
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

  // (группа "Семейная") 8 индекс

  const birthGroup = prices[8];

  return (
    <div className={styles.page}>
      <div className={styles.mainTitle}>
        <h1>Семейная фотосессия</h1>
      </div>
      <div className={styles.priceContainer}>
        {birthGroup.map((price: TypePrice, index: number) => (
          <div key={price.id} className={styles.priceCard}>
            <div className={styles.imageContainer}>
              <img
                src={photos[index]}
                alt={price.package_title}
                className={styles.cardImage}
              />
            </div>
            <h2 className={styles.cardTitle}>{price.package_title}</h2>
            <h3 className={styles.priceTitle}>{price.price_title}</h3>
            <ul className="info-body">
              {price.info_body
                .replace(/[[\]]/g, "")
                .replace(/"/g, "")
                .split(",")
                .map((item, index) => (
                  <li key={index} className={styles.infoItem}>
                    {item.trim()}
                  </li>
                ))}
            </ul>
            <div className={styles.buttonsContainer}>
            <button className={styles.cardButton} onClick={() => navigate('/contacts')}>Связаться</button>
              <button className={styles.cardButton}>Посмотреть фото</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.divider} />
      <div className={styles.intro}>
        <p>
          Семейная съемка - это такое теплое событие для всей семьи, когда вы
          собираетесь вместе, про нее даже рассказывать много не нужно... Мы
          считаем, что каждое взросление малыша, будь то первый Новый год,
          первые шаги, первые слова - это так бесценно, это именно те моменты,
          которые мы по стараемся поймать на наших семейных съемках, это то, что
          останется в памяти навсегда!
        </p>
      </div>
      <FAQ faq={familyFAQData} />
    </div>
  );
}
