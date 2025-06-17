import React, { useState, useMemo, type JSX } from 'react';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router';
import styles from './CaruselPhoto.module.css';
import { CLIENT_ROUTING } from '@/shared/enums/clientRouting';

const CarouselPhotoComponent = ({
  photos,
}: {
  photos: string[];
}): JSX.Element => {
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const groups = useMemo(() => {
    const result = [];
    for (let i = 0; i < photos.length; i += 3) {
      result.push([
        photos[i % photos.length],
        photos[(i + 1) % photos.length],
        photos[(i + 2) % photos.length],
      ]);
    }
    return result;
  }, [photos]);

  return (
    <>
    <h2 className={styles.CarouselPhotoTitle}>Галерея</h2>
      <section className={styles.masonryCarouselSection}>
        <Marquee
          pauseOnHover={false}
          pauseOnClick={false}
          play={!isPaused}
          speed={60}
          gradient={false}
          style={{ width: '100vw', alignItems: 'center' }}
        >
          {groups.map((group, idx) => (
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
                loading="lazy"
                className={styles.masonryLarge}
                alt=""
                onMouseDown={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
              <div className={styles.masonrySmallCol}>
                <img
                  src={group[1]}
                  loading="lazy"
                  className={styles.masonrySmall}
                  alt=""
                  onMouseDown={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                />
                <img
                  src={group[2]}
                  loading="lazy"
                  className={styles.masonrySmall}
                  alt=""
                  onMouseDown={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                />
              </div>
            </div>
          ))}
        </Marquee>
        <button
          type="button"
          className={styles.outlineButton}
          onClick={() => {navigate(CLIENT_ROUTING.PORTFOLIO); window.scrollTo({ top: 0, behavior: 'smooth' });}}
        >
          <span className={styles.cameraIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#010000"
            >
              <path d="M479.5-267q72.5 0 121.5-49t49-121.5q0-72.5-49-121T479.5-607q-72.5 0-121 48.5t-48.5 121q0 72.5 48.5 121.5t121 49Zm0-60q-47.5 0-78.5-31.5t-31-79q0-47.5 31-78.5t78.5-31q47.5 0 79 31t31.5 78.5q0 47.5-31.5 79t-79 31.5ZM140-120q-24 0-42-18t-18-42v-513q0-23 18-41.5t42-18.5h147l73-87h240l73 87h147q23 0 41.5 18.5T880-693v513q0 24-18.5 42T820-120H140Zm0-60h680v-513H645l-73-87H388l-73 87H140v513Zm340-257Z" />
            </svg>
          </span>
          Смотреть все работы
        </button>
      </section>
    </>
  );
};

export const CarouselPhoto = React.memo(CarouselPhotoComponent);
