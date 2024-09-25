import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './FooterInfoBlock.module.scss';
import { FooterContacts } from '../footer-contacts';
import { contactIcons, navigationData } from '@/shared/constants';
import { Copyright } from '../copyright';
import { NavItem } from '../nav-item';
import { TNavigationDataInfo } from '@/shared/constants/navigation';
import Link from 'next/link';
import { FooterInfoBlockHead as Head } from '../footer-info-block-head';

interface Props {
  items: TNavigationDataInfo;
  className?: string;
}

export const FooterInfoBlock: React.FC<Props> = ({ items, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <Head />
      <Copyright />
      <ul className={styles.inner}>
        {items.map((item, i) => (
          <NavItem
            key={i}
            name={item.name}
            href={item.href}
            links={item.links}
            itemStyles={'text-white hover:text-white/70'}
          />
        ))}
      </ul>
    </div>
  );
};
