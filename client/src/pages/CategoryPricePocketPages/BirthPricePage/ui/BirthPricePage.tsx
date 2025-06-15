import { getAllPriceThunk } from "@/entities/price/api/priceThunkApi";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React, { useEffect } from "react";
import type { TypePrice } from "@/entities/price/model/TypePrice";
import styles from "../../shared/styles/PricePage.module.css";
import { FAQ } from "@/features/FAQ/FAQ";
import { birthFAQData } from "../model/FAQ_data";

// Импортируем фотографии
import mainPagePhoto1 from "@/assets/MainPage/Photos/mainPagePhoto1.jpg";


// Массив фотографий для случайного выбора
const photos = [
  mainPagePhoto1,
];

export function BirthPricePage(): React.JSX.Element {
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

  // Получаем третью группу (группа "Рождение")
  const birthGroup = prices[0];

  return (
    <div className={styles.page}>
      <div className={styles.mainTitle}>
        <h1>Рождение</h1>
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
            {/* <h3 className="price-title">{price.price_title}</h3> */}
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
      <div className={styles.additionalInfo}>
        <h3>НЕ ВКЛЮЧЕНО:</h3>
        <ul>
          <li>
            Визаж и укладка. Исключение в пакете «PREMIUM», где все включено.
          </li>
          <li>Стилист по гардеробу.</li>
          <li>Плата за такси, парковку и т.д.</li>
        </ul>
        <p>
          *Каждый дополнительный час съемки или каждое дополнительное фото на
          обработку обсуждать с менеджером.
        </p>
      </div>
      <div className={styles.divider} />
      <div className={styles.intro}>
        <p>
          Рождение ребенка – это самое важное событие в жизни каждой семьи. Мы
          понимаем, что это особенный момент, и стремимся запечатлеть его с
          максимальной чуткостью и профессионализмом. Наша команда создаст
          атмосферу спокойствия и комфорта, чтобы вы могли полностью
          сосредоточиться на этом чудесном моменте.
        </p>
      </div>
      <FAQ faq={birthFAQData} />
    </div>
  );
}
