import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './InfoBlock.module.scss';
import { Direction } from '../direction';

interface Props {
  className?: string;
}

export const InfoBlock: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.direction}>
        <Direction />
      </div>
      <div className={styles.direction}>
        <Direction />
      </div>
    </div>
  );
};
