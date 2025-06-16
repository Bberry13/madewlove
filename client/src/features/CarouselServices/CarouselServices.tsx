import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules'; // ОДИН общий импорт
import photo1 from '../../assets/MainPage/Photos/MainPageLargePhoto2.jpg';
import photo2 from '../../assets/MainPage/Photos/MainPageLargePhoto3.jpg';
import photo3 from '../../assets/MainPage/Photos/MainPageLargePhoto4.jpg';
import photo4 from '../../assets/MainPage/Photos/MainPageLargePhoto5.jpg';
import photo5 from '../../assets/MainPage/Photos/MainPageLargePhoto6.jpg';
import photo6 from '../../assets/MainPage/Photos/MainPageLargePhoto7.jpg';
import photo7 from '../../assets/MainPage/Photos/MainPageLargePhoto8.jpg';
import photo8 from '../../assets/MainPage/Photos/MainPageLargePhoto9.jpg';
import 'swiper/css';
import styles from './CarouselServices.module.css';

export function CarouselServices() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={16} // <-- только он
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className={styles.mySwiper}
    >
      <SwiperSlide>
        <img src={photo1} alt='service' className={styles.swiperSlideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={photo2} alt='service' className={styles.swiperSlideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={photo3} alt='service' className={styles.swiperSlideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={photo4} alt='service' className={styles.swiperSlideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={photo5} alt='service' className={styles.swiperSlideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={photo6} alt='service' className={styles.swiperSlideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={photo7} alt='service' className={styles.swiperSlideImg} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={photo8} alt='service' className={styles.swiperSlideImg} />
      </SwiperSlide>
    </Swiper>
  );
}
