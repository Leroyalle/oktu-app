import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './PaidEducationTableItem.module.scss';

interface Props {
  department: string;
  duration: string;
  making: string;
  price: string;
  comment: string;
  className?: string;
}

export const PaidEducationTableItem: React.FC<Props> = ({
  department,
  duration,
  making,
  price,
  comment,
  className,
}) => {
  return (
    <div className={cn(styles.root, className)}>
      <span>{department}</span>
      <span>{duration}</span>
      <span>{making}</span>
      <span>{price.toString()}</span>
      <span>{comment}</span>
    </div>
  );
};
