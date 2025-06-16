import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination } from 'swiper/modules'; // ОДИН общий импорт
import 'swiper/css';
import 'swiper/css/navigation'
import styles from './CarouselServices.module.css';
import { photosServices } from '@/assets/MainPage/Photos';

const RightArrowSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#ff8e31">
    <title>Right</title>
    <g id="Right-3" data-name="Right">
      <path d="M21.707,11.293l-7-7A1,1,0,0,0,13,5V8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H13v3a1,1,0,0,0,1.707.707l7-7A1,1,0,0,0,21.707,11.293Z"/>
    </g>
  </svg>
);

const LeftArrowSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#ff8e31" style={{ transform: 'rotate(180deg)' }}>
    <title>Left</title>
    <g id="Right-3" data-name="Right">
      <path d="M21.707,11.293l-7-7A1,1,0,0,0,13,5V8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H13v3a1,1,0,0,0,1.707.707l7-7A1,1,0,0,0,21.707,11.293Z"/>
    </g>
  </svg>
);

export function CarouselServices() {

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params.navigation &&
      typeof swiperRef.current.params.navigation !== 'boolean'
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      // инициализация вручную
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);
  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={8}
        freeMode={true}
        pagination={{ clickable: true }}
        grabCursor={true}
        modules={[FreeMode, Pagination, Navigation]}
        className={styles.mySwiper}
        breakpoints={{
          320: { slidesPerView: 2.4 },
          480: { slidesPerView: 2.4 },
          768: { slidesPerView: 3.2 },
          1024: { slidesPerView: 4.2 },
          1280: { slidesPerView: 6 },
        }}
      >
        {photosServices.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              loading="lazy"
              src={photo}
              alt="service"
              className={styles.swiperSlideImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомные стрелки */}
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#ffebc2" style={{ transform: 'rotate(180deg)' }}>
          <path d="M21.707,11.293l-7-7A1,1,0,0,0,13,5V8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H13v3a1,1,0,0,0,1.707.707l7-7A1,1,0,0,0,21.707,11.293Z" />
        </svg>
      </div>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#ffebc2">
          <path d="M21.707,11.293l-7-7A1,1,0,0,0,13,5V8H3A1,1,0,0,0,2,9v6a1,1,0,0,0,1,1H13v3a1,1,0,0,0,1.707.707l7-7A1,1,0,0,0,21.707,11.293Z" />
        </svg>
      </div>
    </div>
  );
}
