import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './BurgerMenuButton.module.scss';
import { Menu, X } from 'lucide-react';

interface Props {
  isOpened: boolean;
  onClick: VoidFunction;
  className?: string;
}

export const BurgerMenuButton: React.FC<Props> = ({ isOpened, onClick, className }) => {
  return (
    <div className={cn(styles.root, className)} onClick={onClick}>
      {isOpened ? <X /> : <Menu />}
    </div>
  );
};
