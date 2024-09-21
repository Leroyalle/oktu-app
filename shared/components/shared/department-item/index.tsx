import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './DepartmentItem.module.scss';
import Image from 'next/image';
import { Title } from '../title';
import Link from 'next/link';

interface Props {
  id: number;
  name: string;
  imageUrl: string;
  shortDescription: string;
  className?: string;
}

export const DepartmentItem: React.FC<Props> = ({
  id,
  name,
  imageUrl,
  shortDescription,
  className,
}) => {
  return (
    <Link href={`/department/${id}`} className={cn(styles.root, className)}>
      <img src={imageUrl} alt={name} width={223} height={223} />

      <Title
        text={name.length > 37 ? name.substring(0, 40) + '...' : name}
        className={styles.name}
      />
      {shortDescription && <p>{shortDescription.substring(0, 150) + '...'}</p>}
    </Link>
  );
};
