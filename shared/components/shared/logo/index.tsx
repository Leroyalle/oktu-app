import React from 'react';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import styles from './Logo.module.scss';
import Link from 'next/link';
interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <Link href="/" className={styles.logo}>
      {' '}
      <Image
        src={
          '	https://mipt.ru/upload/iblock/205/28nh5s5qofdl7l10ft12vt2xa6jx3tgr/logo_MIPT_blue.svg'
        }
        alt="logo"
        width={220}
        height={56}
      />
    </Link>
  );
};
