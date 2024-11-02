'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MainSliderItem } from '../main-slider-item';
import { MainSliderDataWithRelations } from '@/@types/dataDTO';
import styles from './MainSlider.module.scss';
import { Post } from '@prisma/client';

interface Props {
  items: MainSliderDataWithRelations[];
  lastPost: Post | null;
}
export const MainSlider: React.FC<Props> = ({ items, lastPost }) => {
  if (items.length === 0) {
    return;
  }
  return (
    <Swiper
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      navigation
      modules={[FreeMode, Navigation, Thumbs, Autoplay]}
      className={styles.root}>
      {items?.map((item, i) => (
        <SwiperSlide key={i}>
          <MainSliderItem
            imageUrl={item.imageUrl}
            title={item.title}
            link={item.link}
            text={item.text}
          />
        </SwiperSlide>
      ))}
      {lastPost && (
        <SwiperSlide>
          <MainSliderItem
            imageUrl={lastPost.imageUrl}
            title={lastPost.name}
            link={{ name: 'К новостям', href: `/news` }}
            text={lastPost.shortDescription}
          />
        </SwiperSlide>
      )}
    </Swiper>
  );
};
