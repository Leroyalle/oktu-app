import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './SupportInfoBlock.module.scss';
import { File } from '@prisma/client';
import { FilesBlock } from '../files-block';
import { ItemsWithTitle } from '../items-with-title';
import { supportData } from '@/shared/constants';
import { Paragraph } from '../paragraph';
import { SupportHostelInfo } from '../support-hostel-info';
import { SupportCounseling } from '../support-counseling';

interface Props {
  files: File[];
  className?: string;
}

export const SupportInfoBlock: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <ItemsWithTitle
        title={
          'На основании законодательства Калужской области студентам оказываются следующие виды социальной поддержки:'
        }
        items={supportData}
      />
      <Paragraph
        text={'С целью адаптации студентов проводятся:'}
        className="font-black mt-4 mb-2"
      />
      <SupportCounseling />
      <div className="my-4">
        <SupportHostelInfo />
      </div>
      <div className="mt-8">
        <FilesBlock title={'Прилагаемые документы:'} items={files} />
      </div>
    </section>
  );
};
