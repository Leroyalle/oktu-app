import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './ContactsInfoItem.module.scss';

interface Props {
  title: string;
  text: string;
  href?: string;
  isLink?: boolean;
  className?: string;
}

export const ContactsInfoItem: React.FC<Props> = ({
  title,
  text,
  isLink = false,
  href,
  className,
}) => {
  return (
    <div className={cn(styles.root, className)}>
      <strong>{title}</strong> {isLink && href ? <a href={href}>{text}</a> : text}
    </div>
  );
};
