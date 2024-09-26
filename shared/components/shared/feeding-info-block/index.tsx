import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './FeedingInfoBlock.module.scss';
import { File } from '@prisma/client';
import { FilesBlock } from '../files-block';
import { ItemsWithTitle } from '../items-with-title';
import { feedingData } from '@/shared/constants';

interface Props {
  files: File[];
  className?: string;
}

export const FeedingInfoBlock: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <ItemsWithTitle title={'В учреждении присутствуют:'} items={feedingData} />
      <div className="mt-8">
        <FilesBlock title={'Прилагаемые документы:'} items={files} />
      </div>
    </section>
  );
};
