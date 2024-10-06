import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FilesBlock } from '../files-block';
import { File, NpEducation } from '@prisma/client';
import styles from './NpEducationWrapper.module.scss';
import { getTitleWithTextArray } from '@/shared/lib';
import { BlocksText } from '../blocks-text';

interface Props {
  blocks: NpEducation[];
  files: File[];
  className?: string;
}

export const NpEducationWrapper: React.FC<Props> = ({ blocks, files, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <BlocksText blocks={blocks} className="mb-12" />
      <FilesBlock title={'Основные материалы:'} items={files} className="mb-8" />
    </div>
  );
};
