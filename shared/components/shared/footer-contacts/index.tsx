import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './FooterContacts.module.scss';
import { TContactIcons } from '@/shared/constants/contact-icons';
import { FooterContactsItem } from '../footer-contacts-item';

interface Props {
  items: TContactIcons;
  className?: string;
}

export const FooterContacts: React.FC<Props> = ({ items, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      {items?.map((item, i) => (
        <FooterContactsItem key={i} name={item.name} href={item.href} imageUrl={item.icon} />
      ))}
    </div>
  );
};
