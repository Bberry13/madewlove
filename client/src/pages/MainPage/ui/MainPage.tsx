import React, { type JSX, useState } from 'react';
import styles from './styles.module.css';
import videoBg from '@/assets/MainPage/Main_Video.mp4';
import downArrow from '@/assets/MainPage/downArrow.svg';
import photo1 from '@/assets/MainPage/Photos/mainPagePhoto1.jpg';
import photo2 from '@/assets/MainPage/Photos/mainPagePhoto2.jpg';
import photo3 from '@/assets/MainPage/Photos/mainPagePhoto3.jpg';
import photo4 from '@/assets/MainPage/Photos/mainPagePhoto4.jpg';
import photo5 from '@/assets/MainPage/Photos/mainPagePhoto5.jpg';
import photo6 from '@/assets/MainPage/Photos/mainPagePhoto6.jpg';
import photo7 from '@/assets/MainPage/Photos/mainPagePhoto7.jpg';
import photo8 from '@/assets/MainPage/Photos/mainPagePhoto8.jpg';
import photo9 from '@/assets/MainPage/Photos/mainPagePhoto9.jpg';
import photo10 from '@/assets/MainPage/Photos/mainPagePhoto10.jpg';
import photo11 from '@/assets/MainPage/Photos/mainPagePhoto11.jpg';
import photo12 from '@/assets/MainPage/Photos/mainPagePhoto12.jpg';
import photo13 from '@/assets/MainPage/Photos/mainPagePhoto13.jpg';
import photo14 from '@/assets/MainPage/Photos/mainPagePhoto14.jpg';
import photo15 from '@/assets/MainPage/Photos/mainPagePhoto15.jpg';
import photo16 from '@/assets/MainPage/Photos/mainPagePhoto16.jpg';
import photo17 from '@/assets/MainPage/Photos/mainPagePhoto17.jpg';
import photo18 from '@/assets/MainPage/Photos/mainPagePhoto18.jpg';
import photo19 from '@/assets/MainPage/Photos/mainPagePhoto19.jpg';
import photo20 from '@/assets/MainPage/Photos/mainPagePhoto20.jpg';
import photo21 from '@/assets/MainPage/Photos/mainPagePhoto21.jpg';
import photo22 from '@/assets/MainPage/Photos/mainPagePhoto22.jpg';
import photo23 from '@/assets/MainPage/Photos/mainPagePhoto23.jpg';
import photo24 from '@/assets/MainPage/Photos/mainPagePhoto24.jpg';
import photo25 from '@/assets/MainPage/Photos/mainPagePhoto25.jpg';
import photo26 from '@/assets/MainPage/Photos/mainPagePhoto26.jpg';
import photo27 from '@/assets/MainPage/Photos/mainPagePhoto27.jpg';
import Marquee from 'react-fast-marquee';

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
];

export function MainPage(): JSX.Element {
  const [isPaused, setIsPaused] = useState(false);
  // masonry-группы по 3 фото
  const groups = [];
  for (let i = 0; i < photos.length; i += 3) {
    groups.push([
      photos[i % photos.length],
      photos[(i + 1) % photos.length],
      photos[(i + 2) % photos.length],
    ]);
  }

  // Дублируем массив masonry-групп для длинной ленты (2-3 раза)
  const allGroups = [...groups, ...groups, ...groups];

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
      <section className={styles.masonryCarouselSection}>
        <Marquee
          pauseOnHover={false}
          pauseOnClick={false}
          play={!isPaused}
          speed={60}
          gradient={false}
          style={{ width: '100vw', height: '100vh', alignItems: 'center' }}
        >
          {allGroups.map((group, idx) => (
            <div
              className={styles.masonryGroup}
              key={idx}
              style={{
                minWidth: 480,
                marginRight: 3,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={group[0]}
                className={styles.masonryLarge}
                alt=''
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
              <div className={styles.masonrySmallCol}>
                <img
                  src={group[1]}
                  className={styles.masonrySmall}
                  alt=''
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                />
                <img
                  src={group[2]}
                  className={styles.masonrySmall}
                  alt=''
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
}
