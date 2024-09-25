import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './Copyright.module.scss';

interface Props {
  className?: string;
}

export const Copyright: React.FC<Props> = ({ className }) => {
  return (
    <p className={cn(styles.root, className)}>
      <span>Copyright © 1994–2024 ОКТУ. </span>
      <span>При перепечатке текстовой информации и фотографий ссылка на сайт обязательна.</span>
    </p>
  );
};
