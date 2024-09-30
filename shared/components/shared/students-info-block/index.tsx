import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './StudentsInfoBlock.module.scss';
import { File } from '@prisma/client';
import { FilesBlock } from '../files-block';

interface Props {
  files: File[];
  className?: string;
}

export const StudentsInfoBlock: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <div className="mt-8">
        <FilesBlock title={'Полезные материалы:'} items={files} />
      </div>
    </section>
  );
};
