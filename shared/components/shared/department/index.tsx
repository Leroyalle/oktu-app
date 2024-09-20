import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './Department.module.scss';

interface Props {
  className?: string;
}

export const Department: React.FC<Props> = ({ className }) => {
  return <div className={cn(styles.wrapper, className)}></div>;
};
