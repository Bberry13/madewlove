import React, { type JSX } from 'react';
import videoBg from '@/assets/MainPage/Main_Video_PC.mp4';
import videoBgMobile from '@/assets/MainPage/Main Video_Mobile.mp4';
import photoLoader from '@/assets/MainPage/MainPage_Photo_Loader.png';
import downArrow from '@/assets/MainPage/downArrow.svg';
import styles from './VideoContainer.module.css';
import { CLIENT_ROUTING } from '@/shared/enums/clientRouting';
import { useNavigate } from 'react-router';

interface VideoContainerProps {
  onScrollToCompany: () => void;
}

const VideoContainerComponent = ({ onScrollToCompany }: VideoContainerProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainPage}>
      <div className={styles.videoContainer}>
        <video
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          className={styles.videoBg}
          poster={photoLoader} // Показывается до начала воспроизведения на моб.
        >
          <source src={videoBgMobile} type="video/mp4" media="(max-width: 768px)" />
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
            Made With Love — фото- и видеосъёмка в Москве и Московской области.
            <br /> От первых минут жизни до больших семейных праздников
          </p>
          <button
            className={styles.mainPage_button}
            onClick={() => {
              navigate(CLIENT_ROUTING.CONTACTS);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Записаться
          </button>
        </div>

        <div
          className={styles.mainPage_link}
          onClick={onScrollToCompany}
          style={{ cursor: 'pointer' }}
        >
          <img src={downArrow} alt="downArrow" className={styles.downArrow} loading="lazy" decoding="async" />
          <p className={styles.mainPage_link_text}>Узнать о нас больше</p>
        </div>
      </div>
    </div>
  );
};

export const VideoContainer = React.memo(VideoContainerComponent);
