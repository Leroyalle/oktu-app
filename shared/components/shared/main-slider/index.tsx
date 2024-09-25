'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MainSliderItem } from '../main-slider-item';
import { Link, MainSliderData } from '@prisma/client';
import { MainSliderDataWithRelations } from '@/@types/dataDTO';
// TODO: отрефакторить и

interface Props {
  items: MainSliderDataWithRelations[];
  className?: string;
}
export const MainSlider: React.FC<Props> = ({ items, className }) => {
  return (
    <Swiper
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      navigation
      modules={[FreeMode, Navigation, Thumbs, Autoplay]}>
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
    </Swiper>
  );
};
