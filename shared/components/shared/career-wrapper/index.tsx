import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FilesBlock } from '../files-block';
import { File } from '@prisma/client';
import styles from './CareerWrapper.module.scss';

interface Props {
  files: File[];
  className?: string;
}

export const CareerWrapper: React.FC<Props> = ({ files, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <FilesBlock
        title={'Практики и стажировки:'}
        items={files.filter((file) => file.category === 28)}
      />
      <FilesBlock
        title={'Трудоустройство выпускников:'}
        items={files.filter((file) => file.category === 29)}
      />
      <FilesBlock
        title={'Работодатели - партнеры:'}
        items={files.filter((file) => file.category === 30)}
      />
    </div>
  );
};
