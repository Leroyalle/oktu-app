import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './QuoteText.module.scss';

interface Props {
  text: string;
  className?: string;
}

export const QuoteText: React.FC<Props> = ({ text, className }) => {
  return (
    <blockquote className={className} cite="">
      <p className={styles.quote}>{text}</p>
    </blockquote>
  );
};
