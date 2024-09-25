import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './FilesItem.module.scss';

interface Props {
  name: string;
  href: string;
  iconUrl: string;
  className?: string;
}

export const FilesItem: React.FC<Props> = ({ name, href, iconUrl, className }) => {
  return (
    <a href={href} download title="Скачать" className={cn(styles.root, className)}>
      <img src={iconUrl} /> {name}
    </a>
  );
};
