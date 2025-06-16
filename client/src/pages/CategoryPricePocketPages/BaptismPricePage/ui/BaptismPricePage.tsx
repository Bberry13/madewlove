import { getAllPriceThunk } from "@/entities/price/api/priceThunkApi";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React, { useEffect } from "react";
import type { TypePrice } from "@/entities/price/model/TypePrice";
import styles from "../../shared/styles/PricePage.module.css";
import { FAQ } from "@/features/FAQ/FAQ";
import { baptismFAQData } from "../model/FAQ_data";

import mainPagePhoto22 from "@/assets/MainPage/Photos/mainPagePhoto17.jpg";
import mainPagePhoto23 from "@/assets/MainPage/Photos/mainPagePhoto18.jpg";

const photos = [mainPagePhoto22, mainPagePhoto23];

export function BaptismPricePage(): React.JSX.Element {
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

  // (группа "Крещение") 7 индекс?
  // здесь логика может поменятся из-за самой карточки , где видео
  const birthGroup = prices[7];

  return (
    <div className={styles.page}>
      <div className={styles.mainTitle}>
        <h1>Крещение</h1>
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
              <button className={styles.cardButton}>Узнать стоимость</button>
              <button className={styles.cardButton}>Посмотреть фото</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.divider} />
      <div className={styles.intro}>
        <p>
          Крещение - поистине одно из важных событий в жизни малыша. Опытный
          фотограф на такую съемку крайне важен, так как должен знать как
          происходит таинство, чтоб не упустить ни один момент, как окунание и
          помазание и так далее. И конечно фотограф на крещение должен уметь
          работать при низком освещении, так как во многих храмах очень мало
          света. И наша команда умеет снимать в любых условиях, благодаря
          отличной технике, а также немаловажно не мешая процессу. Мы с
          удовольствием снимаем ваши самые важные события качественно, быстро,
          тихо и с любовью.
        </p>
      </div>
      <FAQ faq={baptismFAQData} />
    </div>
  );
}
