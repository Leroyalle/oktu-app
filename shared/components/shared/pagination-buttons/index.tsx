import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Button } from '../../ui';
import styles from './PaginationButtons.module.scss';

interface Props {
  disabledPrev: boolean;
  disabledNext: boolean;
  onClick: (value: 'plus' | 'minus') => void;
  className?: string;
}

export const PaginationButtons: React.FC<Props> = ({
  disabledPrev,
  disabledNext,
  onClick,
  className,
}) => {
  return (
    <div className={cn(styles.root, className)}>
      <Button onClick={() => onClick('minus')} disabled={disabledPrev}>
        Prev Page
      </Button>
      <Button onClick={() => onClick('plus')} disabled={disabledNext}>
        Next Page
      </Button>
    </div>
  );
};
