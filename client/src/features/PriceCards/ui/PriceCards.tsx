import React from "react";
// import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
// import { useAppSelector } from "@/shared/hooks/useAppSelector";
// import { getAllPriceThunk } from "@/entities/price/api/priceThunkApi";
// import type { TypePrice } from "@/entities/price/model/TypePrice";
import "./PriceCards.css";

// Импортируем все фотографии
import mainPagePhoto1 from "@/assets/MainPage/Photos/mainPagePhoto1.jpg";
import mainPagePhoto2 from "@/assets/MainPage/Photos/mainPagePhoto2.jpg";
import mainPagePhoto3 from "@/assets/MainPage/Photos/mainPagePhoto3.jpg";
import mainPagePhoto4 from "@/assets/MainPage/Photos/mainPagePhoto4.jpg";
import mainPagePhoto5 from "@/assets/MainPage/Photos/mainPagePhoto5.jpg";
import mainPagePhoto6 from "@/assets/MainPage/Photos/mainPagePhoto6.jpg";
import mainPagePhoto7 from "@/assets/MainPage/Photos/mainPagePhoto7.jpg";
import mainPagePhoto8 from "@/assets/MainPage/Photos/mainPagePhoto8.jpg";

// Объект с данными для карточек
const priceCardsData = {
  pregnancy: {
    title: "Беременность",
    photo: mainPagePhoto1,
    buttonText: "Узнать стоимость",
  },
  birth: {
    title: "Рождение",
    photo: mainPagePhoto2,
    buttonText: "Узнать стоимость",
  },
  extracts: {
    title: "Выписки",
    photo: mainPagePhoto3,
    buttonText: "Выбрать роддом",
  },
  newborn: {
    title: "Ньюборн",
    photo: mainPagePhoto4,
    buttonText: "Узнать стоимость",
  },
  baptism: {
    title: "Крещение",
    photo: mainPagePhoto5,
    buttonText: "Узнать стоимость",
  },
  familyPhotoShoot: {
    title: "Семейная фотоссесия",
    photo: mainPagePhoto6,
    buttonText: "Узнать стоимость",
  },
  oneYearPhoto: {
    title: "Годовасие",
    photo: mainPagePhoto7,
    buttonText: "Узнать стоимость",
  },
  photoBooks: {
    title: "Фотокниги",
    photo: mainPagePhoto8,
    buttonText: "Узнать стоимость",
  },
};

export function PriceCards(): React.JSX.Element {
  return (
    <div className="price-cards-container">
      {Object.entries(priceCardsData).map(([key, data]) => (
        <div key={key} className="price-card">
          <div className="image-container">
            <img
              src={data.photo}
              alt={data.title}
              style={{ height: "30vh", width: "100%", objectFit: "cover" }}
            />
          </div>
          <h2 className="card-title">{data.title}</h2>
          <button className="card-button">{data.buttonText}</button>
        </div>
      ))}
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
