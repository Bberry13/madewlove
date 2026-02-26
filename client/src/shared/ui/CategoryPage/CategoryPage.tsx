import React from "react";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { getAllPriceThunk } from "@/entities/price/api/priceThunkApi";
import { FAQ } from "@/features/FAQ/FAQ";
import type { TypePrice } from "@/entities/price/model/TypePrice";
import styles from "./CategoryPage.module.css";

// Импортируем фотографии
import mainPagePhoto1 from "@/assets/MainPage/Photos/mainPagePhoto1.jpg";
import mainPagePhoto2 from "@/assets/MainPage/Photos/mainPagePhoto2.jpg";
import mainPagePhoto3 from "@/assets/MainPage/Photos/mainPagePhoto3.jpg";
import mainPagePhoto4 from "@/assets/MainPage/Photos/mainPagePhoto4.jpg";

// Массив фотографий
const photos = [mainPagePhoto1, mainPagePhoto2, mainPagePhoto3, mainPagePhoto4];

interface CategoryPageProps {
  title: string;
  description: string;
  faqData: Array<{
    question: string;
    answer: string;
  }>;
  additionalInfo?: {
    title: string;
    items: string[];
    note?: string;
  };
  photoIndex: number;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  title,
  description,
  faqData,
  additionalInfo,
  photoIndex,
}) => {
  const dispatch = useAppDispatch();
  const { prices, isLoading, error } = useAppSelector((state) => state.price);

  React.useEffect(() => {
    dispatch(getAllPriceThunk());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!prices.length) {
    return <div>No prices found</div>;
  }

  // Получаем первую группу цен
  const priceGroup = prices[0];

  return (
    <div className={styles.categoryPage}>
      <h1 className={styles.categoryTitle}>{title}</h1>

      <div className={styles.categoryIntro}>
        <p>{description}</p>
      </div>

      <div className={styles.categoryPriceContainer}>
        {priceGroup.map((price: TypePrice) => (
          <div key={price.id} className={styles.priceCard}>
            <div className={styles.imageContainer}>
              <img
                src={photos[photoIndex]}
                alt={price.package_title}
                loading="lazy"
              />
            </div>
            <h2 className={styles.cardTitle}>{price.package_title}</h2>
            <h3 className={styles.priceTitle}>{price.price_title}</h3>
            <ul className={styles.infoBody}>
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
              <button className={styles.cardButton}>Записаться</button>
              <button className={styles.cardButton}>Подробнее</button>
            </div>
          </div>
        ))}
      </div>

      {additionalInfo && (
        <div className={styles.additionalInfo}>
          <h3>{additionalInfo.title}</h3>
          <ul>
            {additionalInfo.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {additionalInfo.note && <p>{additionalInfo.note}</p>}
        </div>
      )}

      <FAQ faq={faqData} />
    </div>
  );
};
