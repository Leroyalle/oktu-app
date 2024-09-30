import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '../../ui';
import styles from './PaginationButtons.module.scss';

interface Props {
  page: number;
  totalPage: number;
  disabledPrev: boolean;
  disabledNext: boolean;
  onClick: (value: 'plus' | 'minus') => void;
  className?: string;
}

export const PaginationButtons: React.FC<Props> = ({
  page,
  totalPage,
  disabledPrev,
  disabledNext,
  onClick,
  className,
}) => {
  return (
    <div className={cn(styles.root, className)}>
      <Button onClick={() => onClick('minus')} disabled={disabledPrev}>
        Предыдущая
      </Button>
      <p>
        {page}/{totalPage}
      </p>
      <Button onClick={() => onClick('plus')} disabled={disabledNext}>
        Следующая
      </Button>
    </div>
  );
};
