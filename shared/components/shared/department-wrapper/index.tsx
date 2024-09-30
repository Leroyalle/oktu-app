import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './DepartmentWrapper.module.scss';
import { Banner, Text } from '../post-content';
import { DepartmentWithItem, PostWithItem } from '@/@types/dataDTO';
import { getTextArray } from '@/shared/lib';
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
        <Title text={item.name} size={'2xl'} className={cn(styles.title, 'pageTitle')} />
      </div>
      <div className={styles.inner}>
        <Text textItems={getTextArray(item.departmentItem.topDescription)} />
      </div>
      {item.departmentItem.bottomDescription && (
        <div className={cn(styles.inner, styles.innerBottom)}>
          <Text textItems={getTextArray(item.departmentItem.bottomDescription)} />
        </div>
      )}
    </section>
  );
};
