import React from 'react';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import styles from './TitlesBlockItem.module.scss';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  name: string;
  href: string;
  imageUrl: string;
  className?: string;
}

export const TitlesBlockItem: React.FC<Props> = ({ name, href, imageUrl, className }) => {
  return (
    <li className={cn(styles.root, className)}>
      <Link className={styles.wrapper} href={href}>
        <Image src={imageUrl} alt={name} width={300} height={300} />
        <div className={styles.content}>
          <span>{name}</span>
          <MoveRight />
        </div>
      </Link>
    </li>
  );
};
