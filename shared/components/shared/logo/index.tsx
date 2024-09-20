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
      <Image
        src={
          'https://sun9-42.userapi.com/impg/fg3rMTXnf0kEMPpIUnnmXbt_-WS_GhKy633hAg/Htk2iIujssw.jpg?size=1170x1183&quality=95&sign=bc6b92317a1e73b2e4fc93647e1ca7fb&type=album'
        }
        alt="logo"
        width={56}
        height={56}
      />
      <h2 className={styles.text}>
        Обнинский колледж <br /> технологий и услуг
      </h2>
    </Link>
  );
};
