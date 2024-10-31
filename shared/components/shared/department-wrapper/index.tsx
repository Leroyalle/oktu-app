import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './DepartmentWrapper.module.scss';
import { Banner, Text } from '../post-content';
import { DepartmentWithItem } from '@/@types/dataDTO';
import { Title } from '../title';

interface Props {
  item: DepartmentWithItem;
  className?: string;
}

export const DepartmentWrapper: React.FC<Props> = ({ item, className }) => {
  if (!item.departmentItem) {
    return;
  }
  return (
    <section className={cn(styles.root, className)}>
      <div className={styles.banner}>
        <Banner imageUrl={item.departmentItem?.bigImageUrl || item.imageUrl} name={item.name} />
      </div>
      <div className={styles.heading}>
        <Title text={item.name} size={'2xl'} className={styles.title} />
      </div>
      <div className={styles.inner}>
        <Text textItems={item.departmentItem.topDescription} />
      </div>
      {item.departmentItem.bottomDescription && (
        <div className={cn(styles.inner, styles.innerBottom)}>
          <Text textItems={item.departmentItem.bottomDescription} />
        </div>
      )}
    </section>
  );
};
