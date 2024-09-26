import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './PaidEducationTable.module.scss';
import { PaidEducation } from '@prisma/client';
import { PaidEducationTableItem as Row } from '../paid-education-table-item';
import { Paragraph } from '../paragraph';

interface Props {
  items: PaidEducation[];
  className?: string;
}

export const PaidEducationTable: React.FC<Props> = ({ items, className }) => {
  if (!items) {
    return;
  }
  return (
    <div className={cn(styles.root, className)}>
      <div className={styles.wrapper}>
        <Paragraph
          text={
            'Колледж проводит набор для получения дополнительного профессионального образования по профессиям:'
          }
        />
        <div className={cn(styles.row, styles.head)}>
          <span>Профессия</span>
          <span>Срок обучения</span>
          <span>Квалификация</span>
          <span>Стоимость</span>
          <span>Примечание</span>
        </div>
        {items.map((item, i) => (
          <Row
            key={i}
            className={cn(styles.row, i % 2 === 0 && styles.colored)}
            department={item.department}
            duration={item.duration}
            making={item.making}
            price={item.price.toString()}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  );
};
