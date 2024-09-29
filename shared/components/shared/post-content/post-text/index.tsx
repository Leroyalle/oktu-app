import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './PostText.module.scss';

interface Props {
  textItems: string[];
  className?: string;
}

export const PostText: React.FC<Props> = ({ textItems, className }) => {
  if (!textItems) {
    return;
  }
  return (
    <div className={cn(styles.root, className)}>
      {textItems.map((item, i) => (
        <p key={i}>{item.trim()}</p>
      ))}
    </div>
  );
};
