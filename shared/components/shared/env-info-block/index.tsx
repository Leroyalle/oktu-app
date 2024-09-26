import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './EnvInfoBlock.module.scss';
import { File } from '@prisma/client';
import { FilesBlock } from '../files-block';

interface Props {
  files: File[];
  className?: string;
}

export const EnvInfoBlock: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <div className="mt-4">
        <FilesBlock title={'Основные документы:'} items={files} />
      </div>
    </section>
  );
};
