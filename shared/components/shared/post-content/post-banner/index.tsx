import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './PostBanner.module.scss';

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
}

export const PostBanner: React.FC<Props> = ({ imageUrl, name, className }) => {
  return <img className={cn(styles.root, className)} src={imageUrl} alt={name} />;
};
