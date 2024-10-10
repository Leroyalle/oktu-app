import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './GalleryItem.module.scss';
import { ImageItem } from '@prisma/client';
import { GalleryItemFull } from '../gallery-item-full';

interface Props {
  name: string;
  items: ImageItem[];
  createdAt: Date;
  className?: string;
}

export const GalleryItem: React.FC<Props> = ({ name, items, createdAt, className }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [currentSrc, setCurrentSrc] = React.useState<string>('');

  const onClickImage = (imageUrl: string) => {
    setCurrentSrc(imageUrl);
    setIsOpened(true);
  };

  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.wrapper}>
        {items.map((item) => (
          <div key={item.id} className={styles.imageInner}>
            <img
              src={item.imageUrl}
              alt={name}
              width={300}
              height={300}
              onClick={() => onClickImage(item.imageUrl)}
            />
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <span className={styles.date}>{new Date(createdAt).toLocaleDateString()}</span>
        <span className={styles.name}>
          {name.length > 150 ? name.substring(0, 150) + '...' : name}
        </span>
      </div>
      <GalleryItemFull isOpened={isOpened} src={currentSrc} onClose={() => setIsOpened(false)} />
    </div>
  );
};
