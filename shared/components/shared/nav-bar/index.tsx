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
  itemStyles?: string;
  className?: string;
}

export const NavBar: React.FC<Props> = ({ items, itemStyles = 'text-black', className }) => {
  return (
    <nav className={cn(styles.navBar, className)}>
      <ul className={styles.wrapper}>
        {items.map((item, i) => (
          <NavItem
            key={i}
            name={item.name}
            href={item.href}
            links={item.links}
            itemStyles={itemStyles}
          />
        ))}
      </ul>
    </nav>
  );
};
