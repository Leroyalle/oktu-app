'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './FaqItem.module.scss';
import { ChevronDown } from 'lucide-react';
import { getTextArray } from '@/shared/lib';

interface Props {
  question: string;
  answer: string;
  className?: string;
}

export const FaqItem: React.FC<Props> = ({ question, answer, className }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.question} onClick={() => setIsOpened(!isOpened)}>
        <p>{question}</p>
        <ChevronDown className={cn(styles.icon, isOpened && styles.iconRotate, 'arrowIcon')} />
      </div>
      {isOpened && (
        <div className={styles.answer}>
          {getTextArray(answer).map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};
