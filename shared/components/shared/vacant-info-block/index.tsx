import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './VacantInfoBlock.module.scss';
import { File } from '@prisma/client';
import { FilesBlock } from '../files-block';
import { TextOrLinkWithStrong } from '../text-or-link-with-strong';
import { Paragraph } from '../paragraph';

interface Props {
  files: File[];
  className?: string;
}

export const VacantInfoBlock: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <TextOrLinkWithStrong
        title={'По всем вопросам обращаться:'}
        text={'+7-(484)-396-01-67'}
        href={'tel:74843960167'}
      />
      <div className="mt-4">
        <FilesBlock title={'Прилагаемые документы:'} items={files} />
      </div>
    </section>
  );
};
