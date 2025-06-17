import React from 'react';
import styles from './Company.module.css';

export function Company(): React.JSX.Element {
  return (
    <>
      <section className={`${styles.advantagesGrid} ${styles.wrapper}`}>
        <div className={styles.advantageItem}>
          <div className={styles.advantageTitle}>
            <span className={styles.advantageAccent}>Премиум</span> 
          </div>
          <div className={styles.advantageLine}></div>
          <div className={styles.advantageDesc}>
          Отсутствие &quot;конвейера&quot;,<br /> помощь на всех этапах, <br /> не просто фото, а ваша история &nbsp;
          </div>
        </div>
        <div className={styles.advantageItem}>
          <div className={styles.advantageTitle}>
            <span className={styles.advantageAccent}>10 лет опыта</span>
          </div>
          <div className={styles.advantageLine}></div>
          <div className={styles.advantageDesc}>
          Команда из профессиональных фотографов
          с многолетним опытом в детской съемке
          </div>
        </div>
        <div className={styles.advantageItem}>
          <div className={styles.advantageTitle}>
            <span className={styles.advantageAccent}>Сопровождение</span>
          </div>
          <div className={styles.advantageLine}></div>
          <div className={styles.advantageDesc}>
          С первых движений в животике до первых шагов
          снимаем с душой —оформляем фотокниги с любовью
          </div>
        </div>
      </section>
    </>
  );
}
