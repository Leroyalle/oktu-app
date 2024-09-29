import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './PostWrapper.module.scss';
import { Banner, Text } from '../post-content';
import { PostWithItem } from '@/@types/dataDTO';
import { getTextArray } from '@/shared/lib';
import { Title } from '../title';

interface Props {
  item: PostWithItem;
  className?: string;
}

export const PostWrapper: React.FC<Props> = ({ item, className }) => {
  if (!item.postItem) {
    return;
  }
  return (
    <section className={cn(styles.root, className)}>
      <div className={styles.banner}>
        <Banner imageUrl={item.postItem?.bigImageUrl || item.imageUrl} name={item.name} />
      </div>
      <div className={styles.heading}>
        <Title text={item.name} size={'2xl'} className={styles.title} />
        <span>{new Date(item.createdAt).toLocaleDateString()}</span>
      </div>
      <Text textItems={getTextArray(item.postItem.description)} />
    </section>
  );
};
