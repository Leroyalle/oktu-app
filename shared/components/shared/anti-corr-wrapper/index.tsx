import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FilesBlock } from '../files-block';
import { File } from '@prisma/client';
import styles from './AntiCorrWrapper.module.scss';

interface Props {
  files: File[];
  className?: string;
}

export const AntiCorrWrapper: React.FC<Props> = ({ files, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <FilesBlock items={files} className="mb-8" />
    </div>
  );
};
