import React, { useState, useMemo, type JSX } from 'react';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router';
import styles from './CaruselPhoto.module.css';

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
          onClick={() => navigate('/')}
        >
          <span className={styles.cameraIcon}>
            <svg
              width="23"
              height="23"
              viewBox="0 0 20 20"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="6"
                width="14"
                height="10"
                rx="3"
                stroke="#222"
                strokeWidth="1.5"
              />
              <circle cx="10" cy="11" r="3" stroke="#222" strokeWidth="1.5" />
              <rect
                x="7"
                y="3"
                width="6"
                height="3"
                rx="1.5"
                stroke="#222"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          Смотреть все работы
        </button>
      </section>
    </>
  );
};

export const CarouselPhoto = React.memo(CarouselPhotoComponent);
