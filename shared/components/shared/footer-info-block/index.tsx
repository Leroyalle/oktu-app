import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './FooterInfoBlock.module.scss';
import { FooterContacts } from '../footer-contacts';
import { contactIcons } from '@/shared/constants';

interface Props {
  className?: string;
}

export const FooterInfoBlock: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.head}>
        <span title="ОКТУ">ОКТУ</span>
        <FooterContacts items={contactIcons} />
      </div>
    </div>
  );
};
