import React from 'react';
import { cn } from '@/shared/lib/utils';
import {
  TNavigation,
  TNavigationDataBottom,
  TNavigationDataTop,
} from '@/shared/constants/navigation';
import { NavItem } from '../nav-item';
import styles from './NavBar.module.scss';

interface Props {
  items: TNavigationDataBottom | TNavigationDataTop;
  className?: string;
}

export const NavBar: React.FC<Props> = ({ items, className }) => {
  return (
    <div className={cn(styles.navBar, className)}>
      <ul className={styles.wrapper}>
        {items.map((item, i) => (
          <NavItem key={i} name={item.name} href={item.href} links={item.links} />
        ))}
      </ul>
    </div>
  );
};
