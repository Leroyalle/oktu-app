'use client';
import React from 'react';
import styles from './PostItemImageCarousel.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { PostImageCarousel } from '@prisma/client';
import 'swiper/css';
import 'swiper/css/navigation';
import { Title } from '../title';
import { cn } from '@/shared/lib/utils';
import { GalleryItemFull } from '../gallery-item-full';

interface Props {
  items: PostImageCarousel[];
  className?: string;
}

export const PostItemImageCarousel: React.FC<Props> = ({ items, className }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [currentSrc, setCurrentSrc] = React.useState<string>('');

  const onClickImage = (imageUrl: string) => {
    setCurrentSrc(imageUrl);
    setIsOpened(true);
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className={cn(styles.root, className)}>
      <Title text={'Фотографии'} size="lg" />
      <Swiper
        breakpoints={{
          0: {
            spaceBetween: 30,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          970: {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1100: {
            spaceBetween: 30,
            slidesPerView: 2.1,
            slidesPerGroup: 1,
          },
        }}
        spaceBetween={30}
        slidesPerView={2.1}
        navigation
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.root}>
        {items?.map((item, i) => (
          <SwiperSlide key={i}>
            <div key={item.id} className={styles.imageInner}>
              <img
                src={item.imageUrl}
                alt={'Фото из новости'}
                width={300}
                height={300}
                onClick={() => onClickImage(item.imageUrl)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <GalleryItemFull isOpened={isOpened} src={currentSrc} onClose={() => setIsOpened(false)} />
    </section>
  );
};
