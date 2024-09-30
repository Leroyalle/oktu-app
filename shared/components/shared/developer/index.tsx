import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './Developer.module.scss';

interface Props {
  className?: string;
}

export const Developer: React.FC<Props> = ({ className }) => {
  return (
    <article className={cn(styles.root, className)}>
      <a href={'https://github.com/Leroyalle'} target="_blank" aria-label="Developer">
        <address>Created by Leroyalle</address>
      </a>
    </article>
  );
};
