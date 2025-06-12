import React, { type JSX } from 'react';
import styles from './styles.module.css';
import videoBg from '@/assets/MainPage/Main_Video.mp4';
import downArrow from '@/assets/MainPage/downArrow.svg';
import { Marquee } from './marquee';

export function MainPage(): JSX.Element {
  return (
    <>
      <div className={styles.mainPage}>
        <div className={styles.videoContainer}>
          <video autoPlay muted loop playsInline className={styles.videoBg}>
            <source src={videoBg} type='video/mp4' />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
          <div className={styles.videoOverlay}></div>
          <div className={styles.gradientFade}></div>
        </div>
        <div className={styles.centerContent}>
          <div className={styles.mainPage_content}>
            <p className={styles.mainPage_title}>Истории семьи в кадре</p>
            <p className={styles.mainPage_subtitle}>
              От первых минут жизни до больших праздников —<br />
              мы рядом, чтобы сохранить главное
            </p>
            <button className={styles.mainPage_button}>Записаться</button>
          </div>
          <div className={styles.mainPage_link}>
            <img src={downArrow} alt='downArrow' className={styles.downArrow} />
            <p className={styles.mainPage_link_text}>узнать о нас больше</p>
          </div>
        </div>
      </div>
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
              <span className={styles.advantageAccent}>Премиум</span>{' '}
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
        <Marquee/>
      </div>
    </>
  );
}
