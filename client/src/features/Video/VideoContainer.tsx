import React, { type JSX } from 'react';
import videoBg from '@/assets/MainPage/Main_Video.mp4';
import downArrow from '@/assets/MainPage/downArrow.svg';
import styles from './VideoContainer.module.css';
import { CLIENT_ROUTING } from '@/shared/enums/clientRouting';
import { useNavigate } from 'react-router';

const VideoContainerComponent = (): JSX.Element => {
  const navigate = useNavigate();
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
            <h1 className={styles.mainPage_title}>Ваш семейный фотограф</h1>
            <p className={styles.mainPage_subtitle}>
              От первых минут жизни до больших праздников — 
              мы рядом,<br /> чтобы сохранить главное
            </p>
            <button className={styles.mainPage_button} onClick={() => {navigate(CLIENT_ROUTING.CONTACTS); window.scrollTo({ top: 0, behavior: 'smooth' });}}>Записаться</button>
          </div>
          <div className={styles.mainPage_link}>
            <img src={downArrow} alt="downArrow" className={styles.downArrow} />
            <p className={styles.mainPage_link_text}>Узнать о нас больше</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const VideoContainer = React.memo(VideoContainerComponent);
