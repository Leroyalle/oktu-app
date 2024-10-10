import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './DepartmentItem.module.scss';
import { Title } from '../title';
import Link from 'next/link';

interface Props {
  id: number;
  name: string;
  imageUrl: string;
  className?: string;
}

export const DepartmentItem: React.FC<Props> = ({ id, name, imageUrl, className }) => {
  return (
    <Link href={`/department/${id}`} className={cn(styles.root, className)}>
      <img src={imageUrl} alt={name} width={223} height={223} />

      <div className={styles.content}>
        <Title text={name} className={styles.name} />
      </div>
    </Link>
  );
};
