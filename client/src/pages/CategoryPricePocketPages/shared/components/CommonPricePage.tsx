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
  import { useLocation, useNavigate } from "react-router";
  import { FaEdit, FaTimes } from "react-icons/fa";
  import { refreshTokenThunk, getProfileThunk } from "@/entities/user/api/userThunkApi";
        import { CLIENT_ROUTING } from "@/shared/enums/clientRouting";
  
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
  
    const location = useLocation();

  const handleViewPhotosClick = () => {
  const currentPath = location.pathname; // текущий путь, например "/price/birth"

  let targetPath = "/portfolio";

  if (currentPath.startsWith("/price/")) {
    const suffix = currentPath.replace("/price", ""); // /birth
    targetPath += suffix;
  }
  
  navigate(targetPath);
  window.scrollTo({ top: 0, behavior: "smooth" });
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
                </div>
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
                    onClick={() => {navigate(CLIENT_ROUTING.CONTACTS); window.scrollTo({ top: 0, behavior: 'smooth' });}}
                  >
                    Связаться
                  </button>
                  <button className={styles.cardButton} onClick={handleViewPhotosClick}>Посмотреть фото</button>
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
                    <textarea
                      className={styles.infoBodyItemTextarea}
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
