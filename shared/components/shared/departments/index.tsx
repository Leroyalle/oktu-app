'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './Departments.module.scss';
import { Department } from '@prisma/client';
import { Title } from '../title';
import { DepartmentItem } from '../department-item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, FreeMode, Grid, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/effect-coverflow';

interface Props {
  items: Department[];
  className?: string;
}

export const Departments: React.FC<Props> = ({ items, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <Title text={'Факультеты'} size={'xl'} className="mb-8" />
      {/* FIXME: пофиксть фулл баг слайдер */}
      <Swiper
        className={styles.swiper}
        spaceBetween={10}
        grid={{
          rows: 2,
          fill: 'row',
        }}
        slidesPerView={1}
        slidesPerGroup={1}
        breakpoints={{
          750: {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerGroup: 1,
            grid: { rows: 2, fill: 'row' },
          },
          900: {
            spaceBetween: 30,
            slidesPerView: 3,
            slidesPerGroup: 2,
            grid: { rows: 2, fill: 'row' },
          },
        }}
        modules={[FreeMode, Grid, Navigation]}
        navigation>
        {items?.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            <DepartmentItem
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              shortDescription={item.shortDescription}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};