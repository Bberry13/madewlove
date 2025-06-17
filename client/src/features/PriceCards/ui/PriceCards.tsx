// src/features/PriceCards/ui/PriceCards.tsx
import React from "react";
import styles from "./PriceCards.module.css";
import { useNavigate } from "react-router";


type PriceCardData = {
  key: string; // Ключи - название компонента
  title: string;
  photo: string; 
  buttonText: string;
  path: string; 
};

type PriceCardsProps = {
  cards: PriceCardData[]; 
  onCardClick?: (path: string) => void; 
  className?: string;  
};

export function PriceCards({
  cards,
  onCardClick,
  className = "",
}: PriceCardsProps): React.JSX.Element {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    if (onCardClick) {
      onCardClick(path);
    } else {
      navigate(path);
    }
  };

  return (
    <div className={`${styles.priceCardsContainer} ${className}`}>
      {cards.map((card) => (
        <div key={card.key} className={styles.priceCard}>
          <div className={styles.imageContainer}>
            <img
              src={card.photo}
              alt={card.title}
              className={styles.cardImage}
            />
            <div className={styles.overlay}>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <button
                className={styles.cardButton}
                onClick={() => {
                  handleClick(card.path);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


