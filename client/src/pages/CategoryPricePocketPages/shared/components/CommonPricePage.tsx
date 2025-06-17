import { getAllPriceThunk, updatePriceThunk } from "@/entities/price/api/priceThunkApi";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import React, { useEffect, useState } from "react";
import type { TypePrice } from "@/entities/price/model/TypePrice";
import styles from "../styles/PricePage.module.css";
import { FAQ } from "@/features/FAQ/FAQ";
import { useNavigate } from "react-router";
import { FaEdit } from "react-icons/fa";
import { refreshTokenThunk } from "@/entities/user/api/userThunkApi";

type PricePageProps = {
  title: string;
  introText: string;
  faqData: { question: string; answer: string }[];
  priceGroupIndex: number;
  photos: string[];
};

type EditPriceForm = {
  id: string;
  package_title: string;
  price_title: string;
  info_body: string;
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
  const { user, isInitialized, loading: userLoading } = useAppSelector((state) => state.user);
  const isAdmin = user?.role === "ADMIN" || false;
  console.log("CommonPricePage state:", { isAdmin, user, isInitialized, userLoading });  // Для отладки
  const [editPrice, setEditPrice] = useState<EditPriceForm | null>(null);

  useEffect(() => {
    if (!isInitialized) {
      dispatch(refreshTokenThunk());
    }
  }, [dispatch, isInitialized]);

  useEffect(() => {
    if (!prices.length && !isLoading) {
      dispatch(getAllPriceThunk());
    }
  }, [dispatch, prices.length, isLoading]);

  if (!isInitialized || userLoading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (isLoading) {
    return <div className={styles.loading}>Загрузка цен...</div>;
  }

  if (!prices.length) {
    return <div className={styles.empty}>Цены не найдены</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  const priceGroup = prices[priceGroupIndex];

  const handleEditClick = (price: TypePrice) => {
    setEditPrice({
      id: price.id,
      package_title: price.package_title,
      price_title: price.price_title,
      info_body: price.info_body,
    });
  };

  const handleSave = async () => {
    if (!editPrice) return;
    try {
      await dispatch(
        updatePriceThunk({
          id: editPrice.id,
          package_title: editPrice.package_title,
          price_title: editPrice.price_title,
          info_body: editPrice.info_body,
        })
      ).unwrap();
      setEditPrice(null);
    } catch (error) {
      console.error("Ошибка при сохранении:", error);
    }
  };

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
                  src={photos[index % photos.length]}
                  alt={price.package_title}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.titleContainer}>
                <h2 className={styles.cardTitle}>{price.package_title}</h2>
                {isAdmin && (
                  <FaEdit
                    className={styles.editIcon}
                    onClick={() => handleEditClick(price)}
                    title="Редактировать название пакета"
                  />
                )}
              </div>
              <div className={styles.priceTitleContainer}>
                <h3 className={styles.priceTitle}>{price.price_title}</h3>
                {isAdmin && (
                  <FaEdit
                    className={styles.editIcon}
                    onClick={() => handleEditClick(price)}
                    title="Редактировать стоимость"
                  />
                )}
              </div>
              <ul className={styles.infoBody}>
                {infoBodyArray.map((item, idx) => (
                  <li key={idx} className={styles.infoItem}>
                    {item.trim()}
                    {isAdmin && (
                      <FaEdit
                        className={styles.editIcon}
                        onClick={() => handleEditClick(price)}
                        title="Редактировать описание"
                      />
                    )}
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

      {editPrice && isAdmin && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Редактировать пакет</h2>
            <label>
              Название пакета:
              <input
                type="text"
                value={editPrice.package_title}
                onChange={(e) =>
                  setEditPrice({ ...editPrice, package_title: e.target.value })
                }
              />
            </label>
            <label>
              Стоимость:
              <input
                type="text"
                value={editPrice.price_title}
                onChange={(e) =>
                  setEditPrice({ ...editPrice, price_title: e.target.value })
                }
              />
            </label>
            <label>
              Описание (JSON):
              <textarea
                value={editPrice.info_body}
                onChange={(e) =>
                  setEditPrice({ ...editPrice, info_body: e.target.value })
                }
                rows={5}
              />
            </label>
            <div className={styles.modalButtons}>
              <button onClick={handleSave}>Сохранить</button>
              <button onClick={() => setEditPrice(null)}>Отмена</button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.divider} />
      <div className={styles.intro}>
        <p>{introText}</p>
      </div>
      <FAQ faq={faqData} />
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import type { TypePrice } from "@/entities/price/model/TypePrice";
// import styles from "../styles/PricePage.module.css";
// import { FAQ } from "@/features/FAQ/FAQ";
// import { useNavigate } from "react-router";

// // временно я библиотекарь - карандишик
// import { FaEdit } from "react-icons/fa";
// import { useAuth } from "../context/AuthContext";


// type PricePageProps = {
//     title: string; // Заголовок страницы (например, "Крещение")
//     introText: string; // Вступительный текст
//     faqData: { question: string; answer: string }[]; // Данные для FAQ
//     priceGroupIndex: number; // Индекс группы цен в массиве prices
//     photos: string[]; // Массив путей к изображениям для карточек
//   };

//   type EditPriceForm = {
//     // id: number;
//     id: string;  // стринга ?
//     package_title: string;
//     price_title: string;
//     info_body: string;
//   };

//   export function CommonPricePage({
//     title,
//     introText,
//     faqData,
//     priceGroupIndex,
//     photos,
//   }: PricePageProps): React.JSX.Element {
//     const navigate = useNavigate();
//     const dispatch = useAppDispatch();
//     const { prices, isLoading, error } = useAppSelector((state) => state.price);
// //   добавлю после протектед роутер и реализации админа
//     const { isAdmin } = useAuth();
//     console.log("isAdmin:", isAdmin);

//     const [editPrice, setEditPrice] = useState<EditPriceForm | null>(null);

//     // каждый раз идет парсинг с бд всех данных
//     // useEffect(() => {
//     //   dispatch(getAllPriceThunk());
//     // }, [dispatch]);



// // здесь же перед распарсом срабатывает проверка на готовые данные, остатеся дернуть индекс
// // при рендере
//     useEffect(() => {
//         if (!prices.length && !isLoading) {
//           dispatch(getAllPriceThunk());
//         }
//       }, [dispatch, prices.length, isLoading]);
  
//     if (isLoading) {
//       return <div className={styles.loading}>Загрузка</div>;
//     }
  
//     if (!prices.length) {
//       return <div className={styles.empty}>Цены не найдены</div>;
//     }
  
//     if (error) {
//       return <div className={styles.error}>Ошибка: {error}</div>;
//     }
  
//     const priceGroup = prices[priceGroupIndex];
  

//     // реализация апдейта
//     const handleEditClick = (price: TypePrice) => {
//         setEditPrice({
//           id: price.id,
//           package_title: price.package_title,
//           price_title: price.price_title,
//           info_body: price.info_body,
//         });
//       };
    
//       const handleSave = async () => {
//         if (!editPrice) return;
//         try {
//           await dispatch(
//             updatePriceThunk({
//               id: editPrice.id,
//               package_title: editPrice.package_title,
//               price_title: editPrice.price_title,
//               info_body: editPrice.info_body,
//             })
//           ).unwrap();
//           setEditPrice(null);
//         } catch (error) {
//           console.error("Ошибка при сохранении:", error);
//         }
//       };
//     return (
//       <div className={styles.page}>
//         <div className={styles.mainTitle}>
//           <h1>{title}</h1>
//         </div>
//         <div className={styles.priceContainer}>
//           {priceGroup.map((price: TypePrice, index: number) => {
//             let infoBodyArray: string[];
//             try {
//               infoBodyArray = JSON.parse(price.info_body);
//             } catch (e) {
//               console.error("Ошибка парсинга info_body:", e);
//               infoBodyArray = [];
//             }
  
//             return (
//                 <div key={price.id} className={styles.priceCard}>
//                   <div className={styles.imageContainer}>
//                     <img
//                       src={photos[index % photos.length]}
//                       alt={price.package_title}
//                       className={styles.cardImage}
//                     />
//                   </div>
//                   <div className={styles.titleContainer}>
//                     <h2 className={styles.cardTitle}>{price.package_title}</h2>
//                     {isAdmin && (
                    
//                       <FaEdit
//                         className={styles.editIcon}
//                         onClick={() => handleEditClick(price)}
//                         title="Редактировать название пакета"
//                       />
//                     )}
//                   </div>
//                   <div className={styles.priceTitleContainer}>
//                     <h3 className={styles.priceTitle}>{price.price_title}</h3>
//                     {isAdmin && (
                    
//                       <FaEdit
//                         className={styles.editIcon}
//                         onClick={() => handleEditClick(price)}
//                         title="Редактировать стоимость"
//                       />
//                     )}
//                   </div>
//                   <ul className={styles.infoBody}>
//                     {infoBodyArray.map((item, idx) => (
//                       <li key={idx} className={styles.infoItem}>
//                         {item.trim()}
//                         {isAdmin && (
                    
//                           <FaEdit
//                             className={styles.editIcon}
//                             onClick={() => handleEditClick(price)}
//                             title="Редактировать описание"
//                           />
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                   <div className={styles.buttonsContainer}>
//                     <button
//                       className={styles.cardButton}
//                       onClick={() => navigate("/contacts")}
//                     >
//                       Связаться
//                     </button>
//                     <button className={styles.cardButton}>Посмотреть фото</button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
    
//           {/* Модальное окно для редактирования */}
//           {editPrice && (
//             <div className={styles.modal}>
//               <div className={styles.modalContent}>
//                 <h2>Редактировать пакет</h2>
//                 <label>
//                   Название пакета:
//                   <input
//                     type="text"
//                     value={editPrice.package_title}
//                     onChange={(e) =>
//                       setEditPrice({ ...editPrice, package_title: e.target.value })
//                     }
//                   />
//                 </label>
//                 <label>
//                   Стоимость:
//                   <input
//                     type="text"
//                     value={editPrice.price_title}
//                     onChange={(e) =>
//                       setEditPrice({ ...editPrice, price_title: e.target.value })
//                     }
//                   />
//                 </label>
//                 <label>
//                   Описание (JSON):
//                   <textarea
//                     value={editPrice.info_body}
//                     onChange={(e) =>
//                       setEditPrice({ ...editPrice, info_body: e.target.value })
//                     }
//                     rows={5}
//                   />
//                 </label>
//                 <div className={styles.modalButtons}>
//                   <button onClick={handleSave}>Сохранить</button>
//                   <button onClick={() => setEditPrice(null)}>Отмена</button>
//                 </div>
//               </div>
//             </div>
//           )}
    
//           <div className={styles.divider} />
//           <div className={styles.intro}>
//             <p>{introText}</p>
//           </div>
//           <FAQ faq={faqData} />
//         </div>
//       );
//   }