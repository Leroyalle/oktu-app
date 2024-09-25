import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './FooterNavigationList.module.scss';
import { TNavigationDataFooterNav } from '@/shared/constants/navigation';
import { NavItem } from '../nav-item';

interface Props {
  items: TNavigationDataFooterNav;
  className?: string;
}

export const FooterNavigationList: React.FC<Props> = ({ items, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <ul>
        {items.map((item, i) => (
          <NavItem
            key={i}
            name={item.name}
            href={item.href}
            links={item.links}
            itemStyles={'text-white hover:text-white/70 text-lg text-nowrap'}
          />
        ))}
      </ul>
    </section>
  );
};
