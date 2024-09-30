import React from 'react';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import styles from './Logo.module.scss';
import Link from 'next/link';
import { Title } from '../title';
interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <Link href="/" className={styles.link}>
      <Image src={'/assets/logo.jpg'} alt="logo" width={56} height={56} />
      <h2 className={styles.text}>
        Обнинский колледж <br /> технологий и услуг
      </h2>
    </Link>
  );
};
