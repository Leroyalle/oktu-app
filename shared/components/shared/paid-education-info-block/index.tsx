import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './PaidEducationInfoBlock.module.scss';
import { File, PaidEducation } from '@prisma/client';
import { PaidEducationTable } from '../paid-education-table';
import { FilesBlock } from '../files-block';

interface Props {
  items: PaidEducation[];
  files: File[];
  className?: string;
}

export const PaidEducationInfoBlock: React.FC<Props> = ({ items, files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <PaidEducationTable items={items} />
      <div className="mt-8">
        <FilesBlock title={'Прилагаемые документы:'} items={files} />
      </div>
    </section>
  );
};
