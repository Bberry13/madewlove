import { getAllPriceThunk } from "@/entities/price/api/priceThunkApi";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React, { useEffect } from "react";
import type { TypePrice } from "@/entities/price/model/TypePrice";
import styles from "./PregnancyPricePage.module.css";
import { FAQ } from "@/features/FAQ/FAQ";
import { pregnancyFAQData } from "../model/FAQ_data";


// Импортируем фотографии
import mainPagePhoto1 from "@/assets/MainPage/Photos/mainPagePhoto1.jpg";
import mainPagePhoto2 from "@/assets/MainPage/Photos/mainPagePhoto2.jpg";
import mainPagePhoto3 from "@/assets/MainPage/Photos/mainPagePhoto3.jpg";
import mainPagePhoto4 from "@/assets/MainPage/Photos/mainPagePhoto4.jpg";
import mainPagePhoto5 from "@/assets/MainPage/Photos/mainPagePhoto5.jpg";
import mainPagePhoto6 from "@/assets/MainPage/Photos/mainPagePhoto6.jpg";
import mainPagePhoto7 from "@/assets/MainPage/Photos/mainPagePhoto7.jpg";
import mainPagePhoto8 from "@/assets/MainPage/Photos/mainPagePhoto8.jpg";
import { useNavigate } from "react-router";

// Массив фотографий для случайного выбора
const photos = [
  mainPagePhoto1,
  mainPagePhoto2,
  mainPagePhoto3,
  mainPagePhoto4,
  mainPagePhoto5,
  mainPagePhoto6,
  mainPagePhoto7,
  mainPagePhoto8,
];

export function PregnancyPricePage(): React.JSX.Element {
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

  // Получаем вторую группу (группа "Беременность")
  const pregnancyGroup = prices[1];

  return (
    <div className={styles.pregnancyPage}>
      <div className={styles.pregnancyMainTitle}>
        <h1>Беремeнность</h1>
      </div>
      <div className={styles.pregnancyPriceContainer}>
        {pregnancyGroup.map((price: TypePrice, index: number) => (
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
              <button className={styles.cardButton} onClick={() => navigate('/contacts')}>Связаться</button>
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
      <div className={styles.pregnancyIntro}>
        <p>
          Красота и чудо беременности – это настоящая магия, когда в теле
          женщины зарождается новая жизнь. Запечатлеть свою беременность для
          нашей команды - это прийти расслабленной на съемку, не продумывая
          самостоятельно кучу образов, не подбирая украшения и не придумывая
          идеи, ведь мы как женщины, понимаем, что самое сложное на последних
          месяцах беременности - это сборы и подготовка к съемке: наша команда
          во всем вам поможет и берет это на себя. Вам остается только
          максимально отдохнуть перед съемкой, приехать вовремя и насладиться
          процессом.
        </p>
      </div>
      <FAQ faq={pregnancyFAQData} />
    </div>
  );
}

// export function PriceCards(): React.JSX.Element {
//   const dispatch = useAppDispatch();
//   const { prices, isLoading, error } = useAppSelector((state) => state.price);

//   // Загружаем цены при монтировании компонента
//   useEffect(() => {
//     dispatch(getAllPriceThunk());
//   }, [dispatch]);

//   // Функция для преобразования info_body в массив строк
//   const parseInfoBody = (infoBody: string): string[] => {
//     return infoBody
//       .split(",")
//       .map((item) => item.trim())
//       .filter(Boolean);
//   };

//   if (isLoading) {
//     return <div className="loading">Загрузка...</div>;
//   }

//   if (error) {
//     return <div className="error">Ошибка: {error}</div>;
//   }

//   if (!prices.length) {
//     return <div className="empty">Цены не найдены</div>;
//   }

//   return (
//     <div className="price-cards-container">
//       {prices.map((group, groupIndex) => (
//         <div key={`group-${groupIndex}`} className="price-group">
//           {group.map((price: TypePrice) => (
//             <div key={price.id} className="price-card">
//               <div>
//                 <img
//                   src={mainPhoto}
//                   alt="Фотография скоро появится"
//                   style={{ height: "40vh" }}
//                 />
//               </div>
//               <h2 className="package-title">{price.package_title}</h2>
//               <h3 className="price-title">{price.price_title}</h3>
//               <ul className="info-body">
//                 {parseInfoBody(price.info_body).map((item, index) => (
//                   <li key={index} className="info-item">
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }
