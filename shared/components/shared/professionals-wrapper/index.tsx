import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FilesBlock } from '../files-block';
import { File, Professionals } from '@prisma/client';
import styles from './ProfessionalsWrapper.module.scss';
import { BlocksText } from '../blocks-text';

interface Props {
  blocks: Professionals[];
  files: File[];
  className?: string;
}

export const ProfessionalsWrapper: React.FC<Props> = ({ blocks, files, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <BlocksText blocks={blocks} className="mb-12" />
      <FilesBlock title={'Основные материалы:'} items={files} />
    </div>
  );
};
