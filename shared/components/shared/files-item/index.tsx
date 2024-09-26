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
    <a
      download={name}
      href={href}
      title="Скачать"
      rel="noopener noreferrer"
      target="_blank"
      className={cn(styles.root, className)}>
      <img src={iconUrl} /> <span>{name.length > 100 ? name.substring(0, 100) + '...' : name}</span>
    </a>
  );
};
