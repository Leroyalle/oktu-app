'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './Tags.module.scss';
import { Tag } from '@prisma/client';
import { Button } from '../../ui';
import Link from 'next/link';

interface Props {
  isShowItems: boolean;
  setIsShowItems: () => void;
  items: Tag[];
  currentTagId: number;
  onClick: (id: number) => void;
  className?: string;
}

export const Tags: React.FC<Props> = ({
  setIsShowItems,
  isShowItems,
  items,
  currentTagId,
  onClick,
  className,
}) => {
  const tags = isShowItems ? items : items.slice(0, 2);

  return (
    <div className={cn(styles.root, className)}>
      <span onClick={() => onClick(0)} className={cn(currentTagId === 0 && styles.active)}>
        Все теги
      </span>
      {tags.map((tag) => (
        <span
          key={tag.id}
          onClick={() => onClick(tag.id)}
          className={cn(currentTagId === tag.id && styles.active)}>
          {tag.name}
        </span>
      ))}
      <Button onClick={setIsShowItems}>{isShowItems ? 'Скрыть' : 'Показать все'}</Button>
    </div>
  );
};
