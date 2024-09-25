import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './Paragraph.module.scss';

interface Props {
  text: string;
  className?: string;
}

export const Paragraph: React.FC<Props> = ({ text, className }) => {
  return <p className={cn(styles.root, className)}>{text}</p>;
};
