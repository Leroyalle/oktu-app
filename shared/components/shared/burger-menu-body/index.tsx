import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './BurgerMenuBody.module.scss';
import { TNavigationDataMobile } from '@/shared/constants/navigation';
import { BurgerMenuItem } from '../burger-menu-item';

interface Props {
  items: TNavigationDataMobile;
  className?: string;
}

export const BurgerMenuBody: React.FC<Props> = ({ items, className }) => {
  return (
    <nav className={cn(styles.root, className)}>
      {items.map((item, i) => (
        <BurgerMenuItem key={i} item={item} />
      ))}
    </nav>
  );
};
