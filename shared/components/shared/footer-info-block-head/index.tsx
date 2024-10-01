import React from 'react';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import { FooterContacts } from '../footer-contacts';
import styles from './FooterInfoBlockHead.module.scss';
import { contactIcons } from '@/shared/constants';

interface Props {
  className?: string;
}

export const FooterInfoBlockHead: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <Link href={'/'} title="ОКТУ">
        ОКТУ
      </Link>
      <FooterContacts items={contactIcons} />
    </div>
  );
};
