import React, { type JSX } from 'react';
import styles from './Company.module.css';

export function Company(): JSX.Element {
  return (
    <div>
      <section className={`${styles.advantagesGrid} ${styles.wrapper}`}>
        <div className={styles.advantageItem}>
          <div className={styles.advantageTitle}>
            <span className={styles.advantageAccent}>7</span> лет опыта
          </div>
          <div className={styles.advantageLine}></div>
          <div className={styles.advantageDesc}>
            Опыт в профессиональной
            <br />
            фотографии
          </div>
        </div>
        <div className={styles.advantageItem}>
          <div className={styles.advantageTitle}>
            <span className={styles.advantageAccent}>Премиум</span>
          </div>
          <div className={styles.advantageLine}></div>
          <div className={styles.advantageDesc}>
            Используем только лучшую
            <br />и качественную технику
          </div>
        </div>
        <div className={styles.advantageItem}>
          <div className={styles.advantageTitle}>
            <span className={styles.advantageAccent}>Комплекс</span> услуг
          </div>
          <div className={styles.advantageLine}></div>
          <div className={styles.advantageDesc}>
            Организация фотосессии от
            <br />
            платья до фотокниги
          </div>
        </div>
      </section>
    </div>
  );
}
