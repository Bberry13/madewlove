import { getAllPriceThunk } from "@/entities/price/api/priceThunkApi";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React, { useEffect } from "react";
import type { TypePrice } from "@/entities/price/model/TypePrice";
import styles from "../../../shared/styles/PricePage.module.css";
import { FAQ } from "@/features/FAQ/FAQ";
import { townextraFAQData } from "../model/FAQ_data";

import mainPagePhoto1 from "@/assets/MainPage/Photos/mainPagePhoto1.jpg";
import mainPagePhoto2 from "@/assets/MainPage/Photos/mainPagePhoto2.jpg";
import mainPagePhoto3 from "@/assets/MainPage/Photos/mainPagePhoto3.jpg";
import { useNavigate } from "react-router";
// Видос в цетральной карточки?
const photos = [mainPagePhoto1, mainPagePhoto2, mainPagePhoto3];

export function TownExtraPricePage(): React.JSX.Element {
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

  // (группа "TownExtra") 5 индекс
  // здесь логика может поменятся из-за самой карточки , где видео
  const birthGroup = prices[5];

  return (
    <div className={styles.page}>
      <div className={styles.mainTitle}>
        <h1>Городские роддома</h1>
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
              <button
                className={styles.cardButton}
                onClick={() => navigate("/contacts")}
              >
                Связаться
              </button>
              <button className={styles.cardButton}>Посмотреть фото</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.divider} />
      <div className={styles.intro}>
        <p>
          Что может быть прекраснее встречи малыша, которого так сильно ждут все
          члены семьи? Мы снимаем этот особенный момент с любовью и не упускаем
          ни один момент. Папа, увидевший впервые свое маленькое чудо.
          Новоиспеченные бабушки, которые с трясущимися руками берут малыша и
          дедушки, которые боятся прикоснуться к нему, и слезы счастья всех
          присутствующих - это именно те эмоции, которые обязательно нужно
          запечатлеть в свой семейный архив… Мы понимаем, как всем хочется
          побыстрее очутиться дома и начать новую жизнь с этой маленькой крохой,
          поэтому мы успеваем быстро и красиво снять прекрасный момент выписки и
          не мучаем фотосессией.
        </p>
      </div>
      <FAQ faq={townextraFAQData} />
    </div>
  );
}
