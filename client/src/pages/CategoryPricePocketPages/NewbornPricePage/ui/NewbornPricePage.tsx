import { getAllPriceThunk } from "@/entities/price/api/priceThunkApi";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React, { useEffect } from "react";
import type { TypePrice } from "@/entities/price/model/TypePrice";
import styles from "../../shared/styles/PricePage.module.css";
import { FAQ } from "@/features/FAQ/FAQ";
import { newbornFAQData } from "../model/FAQ_data";

// Импортируем фотографии

import mainPagePhoto1 from "@/assets/MainPage/Photos/mainPagePhoto1.jpg";
import mainPagePhoto2 from "@/assets/MainPage/Photos/mainPagePhoto2.jpg";
import mainPagePhoto3 from "@/assets/MainPage/Photos/mainPagePhoto3.jpg";
import { useNavigate } from "react-router";

const photos = [mainPagePhoto1, mainPagePhoto2, mainPagePhoto3];

export function NewbornPricePage(): React.JSX.Element {
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

  // (группа "Ньюьорн") 6 индекс?
  const birthGroup = prices[6];

  return (
    <div className={styles.page}>
      <div className={styles.mainTitle}>
        <h1>Ньюборн</h1>
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
      <div className={styles.additionalInfo}>
        <h3>
          У нас есть два вида NATURAL NEWBORN съемки, как в палате роддома, так
          и в первые дни дома. * для роддома ЦКБ действуют специальные условия
          на этот пакет, уточняйте у менеджера.
        </h3>
        <p>
          Фотографии делаются при естественном освещении, в нежных светлых
          тонах, чтоб весь акцент был не на атрибутике, а на малыше.
        </p>
      </div>
      <div className={styles.divider} />
      <div className={styles.intro}>
        <p>
          Мы снимаем все нюборны: от домашнего до классического, но наш фокус
          все равно остается на естественности. Именно поэтому мы создали с
          любовью для вас этот пакет NATURAL NEWBORN и пакет CLASSIC который не
          похож ни на один другой ньюборн. Мы приезжаем реквизитом, но наш
          главный приоритет - это натуральные светлые ткани и ваши эмоции. Мы не
          заматываем малыша в десять обмоток, используем светлые и кофейные тона
          в костюмчиках, мы снимаем малыша такого, какой он появился на свет, мы
          считаем важно запечатлеть каждое родимое пятнышко, маленькие ручки с
          маникюром, шершавые, но такие любимые ножки, мы не делаем из деток
          фарфоровых кукол - минимум фотошопа, максимум воспоминаний. Мы
          считаем, что родители - неотъемлемая часть съемки и поэтому наша цель
          - оставить в памяти моменты, где малыш проявляет свои первые эмоции,
          на ручках у мамы и папы. Поверьте, в нашем арсенале огромное
          количество вариантов, как можно интересно уложить малыша на руках,
          поэтому фотосессия не будет состоять из одинаковых картинок. Первый
          робкий поцелуй папы, нежность маминых рук, вот что вы получите по
          итогу этой съемки!
        </p>
      </div>
      <FAQ faq={newbornFAQData} />
    </div>
  );
}
