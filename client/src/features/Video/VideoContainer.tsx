import React, { type JSX } from 'react';
import videoBg from '@/assets/MainPage/Main_Video.mp4';
import downArrow from '@/assets/MainPage/downArrow.svg';
import styles from './VideoContainer.module.css';

const VideoContainerComponent = (): JSX.Element => {
  return (
    <>
      <div className={styles.mainPage}>
        <div className={styles.videoContainer}>
          <video  preload="none" autoPlay muted loop playsInline className={styles.videoBg}>
            <source src={videoBg} type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
          <div className={styles.videoOverlay}></div>
          <div className={styles.gradientFade}></div>
        </div>
        <div className={styles.centerContent}>
          <div className={styles.mainPage_content}>
            <p className={styles.mainPage_title}>Ваш семейный фотограф</p>
            <p className={styles.mainPage_subtitle}>
              От первых минут жизни до больших праздников —<br />
              мы рядом, чтобы сохранить главное
            </p>
            <button className={styles.mainPage_button}>Записаться</button>
          </div>
          <div className={styles.mainPage_link}>
            <img src={downArrow} alt="downArrow" className={styles.downArrow} />
            <p className={styles.mainPage_link_text}>узнать о нас больше</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const VideoContainer = React.memo(VideoContainerComponent);
