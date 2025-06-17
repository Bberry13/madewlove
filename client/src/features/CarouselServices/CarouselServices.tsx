import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules'; // ОДИН общий импорт
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './CarouselServices.module.css';
import { photosServices } from '@/assets/MainPage/Photos';
import { title } from 'process';
import { navigate, useNavigate } from 'react-router';

export function CarouselServices() {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<any>(null);

  const [initialSlide, setInitialSlide] = useState(() => {
    if (window.innerWidth >= 1024) {
      return 2; // например, для больших экранов старт слайд 2
    } else if (window.innerWidth >= 768) {
      return 1; // для средних экранов старт 1
    } else {
      return 0; // для мобильных старт 0
    }
  });

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!swiperRef.current) return;
    if (prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [prevRef.current, nextRef.current]);

  const updateArrows = (swiper: any) => {
    const activeIndex = swiper.activeIndex;

    if (screenWidth >= 1024) {
      setIsAtStart(activeIndex < 3); // скрыть левую до 3-го слайда
      setIsAtEnd(activeIndex >= 5); // скрыть правую на 6-м и далее
    } else {
      setIsAtStart(swiper.isBeginning);
      setIsAtEnd(swiper.isEnd);
    }
  };

  return (
    <>
    <div style={{textAlign: 'center', marginBottom: '20px'}}>
      <h2>Наши услуги</h2>
    </div>
    <div style={{ position: 'relative' }}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateArrows(swiper);
        }}
        onSlideChange={() => {
          if (swiperRef.current) updateArrows(swiperRef.current);
        }}
        initialSlide={initialSlide}
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        centeredSlides={true}
        grabCursor={true}
        modules={[FreeMode, Pagination, Navigation]}
        className={styles.mySwiper}
        breakpoints={{
          320: { slidesPerView: 2.4 },
          480: { slidesPerView: 2.4 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
          1280: { slidesPerView: 6.2 },
        }}
      >
        {photosServices.map(({ src, title }, index) => (
  <SwiperSlide
    key={index}
    className={styles.slideContainer}
    onClick={() => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    }}
    style={{ cursor: 'pointer' }} // чтобы было понятно, что можно кликать
  >
    <div className={styles.imageWrapper}>
      <img
        loading='lazy'
        src={src}
        alt={title}
        className={styles.swiperSlideImg}
      />
      <div className={styles.overlay}>
        <div className={styles.textContainer}>{title}</div>
        <button
          className={styles.selectButton}
          onClick={(e) => {
            e.stopPropagation();
            navigate(photosServices[index].path);
          }}
        >
          Узнать подробнее
        </button>
      </div>
    </div>
  </SwiperSlide>
        ))}
      </Swiper>

      {!isAtStart && (
        <div
          ref={prevRef}
          className={styles.customPrevButton}
          style={{
            position: 'absolute',
            left: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            fill='#ede5dd'
            viewBox='0 0 24 24'
            style={{ transform: 'rotate(180deg)' }}
          >
            <path d='M6.37647 7.97793L0.7098 2.31126C0.495134 2.09659 0.391468 1.83737 0.398801 1.53359C0.406134 1.22982 0.517245 0.970593 0.732134 0.755927C0.947023 0.541038 1.21002 0.433594 1.52113 0.433594C1.83225 0.433594 2.09513 0.541038 2.3098 0.755927L8.75447 7.20026C8.87291 7.31871 8.95625 7.44093 9.00447 7.56693C9.05247 7.69293 9.07647 7.82993 9.07647 7.97793C9.07647 8.12615 9.05247 8.26326 9.00447 8.38926C8.95625 8.51504 8.87291 8.63726 8.75447 8.75593L2.2878 15.2226C2.07291 15.4373 1.81358 15.5409 1.5098 15.5336C1.20624 15.5263 0.947023 15.4151 0.732134 15.2003C0.517245 14.9854 0.4098 14.7224 0.4098 14.4113C0.4098 14.1001 0.517245 13.8373 0.732134 13.6226L6.37647 7.97793Z' />
          </svg>
        </div>
      )}

      {!isAtEnd && (
        <div
          ref={nextRef}
          className={styles.customNextButton}
          style={{
            position: 'absolute',
            right: 10,
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            fill='#ede5dd'
            viewBox='0 0 24 24'
          >
            <path d='M6.37647 7.97793L0.7098 2.31126C0.495134 2.09659 0.391468 1.83737 0.398801 1.53359C0.406134 1.22982 0.517245 0.970593 0.732134 0.755927C0.947023 0.541038 1.21002 0.433594 1.52113 0.433594C1.83225 0.433594 2.09513 0.541038 2.3098 0.755927L8.75447 7.20026C8.87291 7.31871 8.95625 7.44093 9.00447 7.56693C9.05247 7.69293 9.07647 7.82993 9.07647 7.97793C9.07647 8.12615 9.05247 8.26326 9.00447 8.38926C8.95625 8.51504 8.87291 8.63726 8.75447 8.75593L2.2878 15.2226C2.07291 15.4373 1.81358 15.5409 1.5098 15.5336C1.20624 15.5263 0.947023 15.4151 0.732134 15.2003C0.517245 14.9854 0.4098 14.7224 0.4098 14.4113C0.4098 14.1001 0.517245 13.8373 0.732134 13.6226L6.37647 7.97793Z' />
          </svg>
        </div>
      )}
    </div>
    </>
  );
}
