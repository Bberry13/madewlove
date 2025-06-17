// src/shared/components/CommonPricePage.tsx
import {
    getAllPriceThunk,
    updatePriceThunk,
  } from "@/entities/price/api/priceThunkApi";
  import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
  import React, { useEffect, useState } from "react";
  import type { TypePrice } from "@/entities/price/model/TypePrice";
  import styles from "../styles/PricePage.module.css";
  import { FAQ } from "@/features/FAQ/FAQ";
  import { useNavigate } from "react-router";
  import { FaEdit, FaTimes } from "react-icons/fa";
  import { refreshTokenThunk, getProfileThunk } from "@/entities/user/api/userThunkApi";
  
  type PricePageProps = {
    title: string;
    introText?: string;
    faqData?: { question: string; answer: string }[];
    priceGroupIndex: number;
    photos: string[];
    additionalInfo?: AdditionalInfo;
  };
  
  type EditPriceForm = {
    id: string;
    package_title: string;
    price_title: string;
    info_body: string[]; // Теперь массив строк
  };
  
  type AdditionalInfo = {
    title: string;
    items?: string[];
    note: string;
  };
  
  export function CommonPricePage({
    title,
    introText,
    faqData,
    priceGroupIndex,
    photos,
    additionalInfo,
  }: PricePageProps): React.JSX.Element {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { prices, isLoading, error } = useAppSelector((state) => state.price);
    const { user, isInitialized, loading: userLoading } = useAppSelector(
      (state) => state.user
    );
    const isAdmin = user?.role === "ADMIN" || false;
    console.log("CommonPricePage state:", { isAdmin, user, isInitialized, userLoading });
    const [editPrice, setEditPrice] = useState<EditPriceForm | null>(null);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
  
    useEffect(() => {
      if (editPrice) {
        setScrollPosition(window.scrollY);
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
        window.scrollTo(0, scrollPosition);
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [editPrice, scrollPosition]);
  
    useEffect(() => {
      if (!isInitialized) {
        dispatch(refreshTokenThunk()).then((result) => {
          if (refreshTokenThunk.fulfilled.match(result)) {
            dispatch(getProfileThunk());
          }
        });
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
      let infoBodyArray: string[] = [];
      try {
        infoBodyArray = JSON.parse(price.info_body);
      } catch (e) {
        console.error("Ошибка парсинга info_body:", e);
        infoBodyArray = price.info_body.split("\n").filter((item) => item.trim());
      }
      setEditPrice({
        id: price.id,
        package_title: price.package_title,
        price_title: price.price_title,
        info_body: infoBodyArray, // Массив строк
      });
    };
  
    const handleInfoBodyChange = (index: number, value: string) => {
      if (!editPrice) return;
      const newInfoBody = [...editPrice.info_body];
      newInfoBody[index] = value;
      setEditPrice({ ...editPrice, info_body: newInfoBody });
    };
  
    const handleAddItem = () => {
      if (!editPrice) return;
      setEditPrice({
        ...editPrice,
        info_body: [...editPrice.info_body, ""],
      });
    };
  
    const handleRemoveItem = (index: number) => {
      if (!editPrice) return;
      const newInfoBody = editPrice.info_body.filter((_, i) => i !== index);
      setEditPrice({ ...editPrice, info_body: newInfoBody });
    };
  
    const handleSave = async () => {
      if (!editPrice) return;
      try {
        await dispatch(
          updatePriceThunk({
            id: editPrice.id,
            package_title: editPrice.package_title,
            price_title: editPrice.price_title,
            info_body: JSON.stringify(editPrice.info_body.filter((item) => item.trim())), // Преобразуем в JSON
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
            let infoBodyArray: string[] = [];
            try {
              infoBodyArray = JSON.parse(price.info_body);
            } catch (e) {
              console.error("Ошибка парсинга info_body:", e);
              infoBodyArray = price.info_body.split("\n").filter((item) => item.trim());
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
              <button
                className={styles.closeButton}
                onClick={() => setEditPrice(null)}
                title="Закрыть"
              >
                <FaTimes />
              </button>
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
                Описание:
                {editPrice.info_body.map((item, index) => (
                  <div key={index} className={styles.infoBodyItem}>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleInfoBodyChange(index, e.target.value)}
                      placeholder={`Пункт ${index + 1}`}
                    />
                    <button
                      type="button"
                      className={styles.removeButton}
                      onClick={() => handleRemoveItem(index)}
                      title="Удалить пункт"
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className={styles.addButton}
                  onClick={handleAddItem}
                >
                  Добавить пункт
                </button>
              </label>
              <div className={styles.modalButtons}>
                <button onClick={handleSave}>Сохранить</button>
                <button onClick={() => setEditPrice(null)}>Отмена</button>
              </div>
            </div>
          </div>
        )}
        {additionalInfo && (
          <div className={styles.additionalInfo}>
            <div className={styles.divider} />
            <h3>{additionalInfo.title}</h3>
            {additionalInfo.items && (
              <ul>
                {additionalInfo.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            <p>{additionalInfo.note}</p>
          </div>
        )}
        {introText && (
          <div className={styles.intro}>
            <div className={styles.divider} />
            <p>{introText}</p>
          </div>
        )}
        {faqData && (
          <>
            <div className={styles.divider} />
            <FAQ faq={faqData} />
          </>
        )}
      </div>
    );
  }

// Логика апдейта с textarea
// import {
//   getAllPriceThunk,
//   updatePriceThunk,
// } from "@/entities/price/api/priceThunkApi";
// import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
// import { useAppSelector } from "@/shared/hooks/useAppSelector";
// import React, { useEffect, useState } from "react";
// import type { TypePrice } from "@/entities/price/model/TypePrice";
// import styles from "../styles/PricePage.module.css";
// import { FAQ } from "@/features/FAQ/FAQ";
// import { useNavigate } from "react-router";
// import { FaEdit } from "react-icons/fa";
// import { refreshTokenThunk } from "@/entities/user/api/userThunkApi";

// type PricePageProps = {
//   title: string;
//   introText?: string;
//   faqData?: { question: string; answer: string }[];
//   priceGroupIndex: number;
//   photos: string[];
//   additionalInfo?: AdditionalInfo;
// };

// type EditPriceForm = {
//   id: string;
//   package_title: string;
//   price_title: string;
//   info_body: string;
// };

// // опц блок НЕ ВКЛЮЧЕНО - для birth
// type AdditionalInfo = {
//   title: string;
//   items?: string[]; // ли элементы
//   note: string;
// };
// // Избавляемся от скобок с кавчками
// const jsonToText = (json: string): string => {
//     try {
//       const array = JSON.parse(json) as string[];
//       return array.join("\n");
//     } catch {
//       return json; // Если не JSON, возвращаем как есть
//     }
//   };
  
//   // Вспомогательная функция для преобразования текста в JSON
//   const textToJson = (text: string): string => {
//     const items = text
//       .split("\n")
//       .map((item) => item.trim())
//       .filter((item) => item); // Убираем пустые строки
//     return JSON.stringify(items);
//   };

// export function CommonPricePage({
//   title,
//   introText,
//   faqData,
//   priceGroupIndex,
//   photos,
//   additionalInfo,
// }: PricePageProps): React.JSX.Element {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const { prices, isLoading, error } = useAppSelector((state) => state.price);
//   const {
//     user,
//     isInitialized,
//     loading: userLoading,
//   } = useAppSelector((state) => state.user);
//   const isAdmin = user?.role === "ADMIN" || false;
//   console.log("CommonPricePage state:", {
//     isAdmin,
//     user,
//     isInitialized,
//     userLoading,
//   }); // Для отладки -убрать
//   const [editPrice, setEditPrice] = useState<EditPriceForm | null>(null);
//   const [scrollPosition, setScrollPosition] = useState<number>(0); // Состояние для позиции скролла

//   // поз скрола при котрытие и закрытие моадллкли
//   useEffect(() => {
//     if (editPrice) {
//       setScrollPosition(window.scrollY);
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//       window.scrollTo(0, scrollPosition);
//     }

//     // oчищаем стили при размонтировании
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [editPrice, scrollPosition]);

//   useEffect(() => {
//     if (!isInitialized) {
//       dispatch(refreshTokenThunk());
//     }
//   }, [dispatch, isInitialized]);

//   useEffect(() => {
//     if (!prices.length && !isLoading) {
//       dispatch(getAllPriceThunk());
//     }
//   }, [dispatch, prices.length, isLoading]);

//   if (!isInitialized || userLoading) {
//     return <div className={styles.loading}>Загрузка...</div>;
//   }

//   if (isLoading) {
//     return <div className={styles.loading}>Загрузка цен...</div>;
//   }

//   if (!prices.length) {
//     return <div className={styles.empty}>Цены не найдены</div>;
//   }

//   if (error) {
//     return <div className={styles.error}>Ошибка: {error}</div>;
//   }

//   const priceGroup = prices[priceGroupIndex];

//   const handleEditClick = (price: TypePrice) => {
//     setEditPrice({
//       id: price.id,
//       package_title: price.package_title,
//       price_title: price.price_title,
//       info_body: jsonToText(price.info_body),
//     });
//   };

//   const handleSave = async () => {
//     if (!editPrice) return;
//     try {
//       await dispatch(
//         updatePriceThunk({
//           id: editPrice.id,
//           package_title: editPrice.package_title,
//           price_title: editPrice.price_title,
//           info_body: textToJson(editPrice.info_body),
//         })
//       ).unwrap();
//       setEditPrice(null);
//     } catch (error) {
//       console.error("Ошибка при сохранении:", error);
//     }
//   };

//   return (
//     <div className={styles.page}>
//       <div className={styles.mainTitle}>
//         <h1>{title}</h1>
//       </div>
//       <div className={styles.priceContainer}>
//         {priceGroup.map((price: TypePrice, index: number) => {
//           let infoBodyArray: string[];
//           try {
//             infoBodyArray = JSON.parse(price.info_body);
//           } catch (e) {
//             console.error("Ошибка парсинга info_body:", e);
//             infoBodyArray = price.info_body.split("\n").filter((item) => item.trim()); // работает?
//           }

//           return (
//             <div key={price.id} className={styles.priceCard}>
//               <div className={styles.imageContainer}>
//                 <img
//                   src={photos[index % photos.length]}
//                   alt={price.package_title}
//                   className={styles.cardImage}
//                 />
//               </div>
//               <div className={styles.titleContainer}>
//                 <h2 className={styles.cardTitle}>{price.package_title}</h2>
//                 {isAdmin && (
//                   <FaEdit
//                     className={styles.editIcon}
//                     onClick={() => handleEditClick(price)}
//                     title="Редактировать название пакета"
//                   />
//                 )}
//               </div>
//               <div className={styles.priceTitleContainer}>
//                 <h3 className={styles.priceTitle}>{price.price_title}</h3>
//                 {isAdmin && (
//                   <FaEdit
//                     className={styles.editIcon}
//                     onClick={() => handleEditClick(price)}
//                     title="Редактировать стоимость"
//                   />
//                 )}
//               </div>
//               <ul className={styles.infoBody}>
//                 {infoBodyArray.map((item, idx) => (
//                   <li key={idx} className={styles.infoItem}>
//                     {item.trim()}
//                     {isAdmin && (
//                       <FaEdit
//                         className={styles.editIcon}
//                         onClick={() => handleEditClick(price)}
//                         title="Редактировать описание"
//                       />
//                     )}
//                   </li>
//                 ))}
//               </ul>
//               <div className={styles.buttonsContainer}>
//                 <button
//                   className={styles.cardButton}
//                   onClick={() => navigate("/contacts")}
//                 >
//                   Связаться
//                 </button>
//                 <button className={styles.cardButton}>Посмотреть фото</button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {editPrice && isAdmin && (
//         <div className={styles.modal}>
//           <div className={styles.modalContent}>
//             <h2>Редактировать пакет</h2>
//             <label>
//               Название пакета:
//               <input
//                 type="text"
//                 value={editPrice.package_title}
//                 onChange={(e) =>
//                   setEditPrice({ ...editPrice, package_title: e.target.value })
//                 }
//               />
//             </label>
//             <label>
//               Стоимость:
//               <input
//                 type="text"
//                 value={editPrice.price_title}
//                 onChange={(e) =>
//                   setEditPrice({ ...editPrice, price_title: e.target.value })
//                 }
//               />
//             </label>
//             <label>
//               Описание (JSON):
//               <textarea
//                 value={editPrice.info_body}
//                 onChange={(e) =>
//                   setEditPrice({ ...editPrice, info_body: e.target.value })
//                 }
//                 rows={5}
//               />
//             </label>
//             <div className={styles.modalButtons}>
//               <button onClick={handleSave}>Сохранить</button>
//               <button onClick={() => setEditPrice(null)}>Отмена</button>
//             </div>
//           </div>
//         </div>
//       )}
//       {additionalInfo && (
//         <div className={styles.additionalInfo}>
//           <div className={styles.divider} />
//           <h3>{additionalInfo.title}</h3>
//           {additionalInfo.items && (
//             <ul>
//               {additionalInfo.items.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           )}
//           <p>{additionalInfo.note}</p>
//         </div>
//       )}
//       {introText && (
//         <div className={styles.intro}>
//           <div className={styles.divider} />
//           <p>{introText}</p>
//         </div>
//       )}
//       <div className={styles.divider} />
//       {faqData && <FAQ faq={faqData} />}
//     </div>
//   );
// }
