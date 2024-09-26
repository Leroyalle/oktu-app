import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './StandardInfoBlock.module.scss';
import { File } from '@prisma/client';
import { FilesBlock } from '../files-block';
import { Paragraph } from '../paragraph';

interface Props {
  files: File[];
  className?: string;
}

export const StandardInfoBlock: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <div className="mt-8">
        <FilesBlock items={files} />
      </div>
    </section>
  );
};
