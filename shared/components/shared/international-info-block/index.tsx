import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './InternationalInfoBlock.module.scss';
import { File } from '@prisma/client';
import { FilesBlock } from '../files-block';
import { Paragraph } from '../paragraph';

interface Props {
  files: File[];
  className?: string;
}

export const InternationalInfoBlock: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <Paragraph
        text={'Международная аккредитация образовательных программ не проводилась'}
        className="font-extrabold"
      />
      <div className="mt-8">
        <FilesBlock title={'Прилагаемые документы:'} items={files} />
      </div>
    </section>
  );
};
