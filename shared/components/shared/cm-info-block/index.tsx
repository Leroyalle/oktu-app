import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './CmInfoBlock.module.scss';
import { Paragraph } from '../paragraph';
import { ItemsWithTitle } from '../items-with-title';
import { collegialCmData } from '@/shared/constants/collegial-cm';
import { addressBuildingData as addressData } from '../../../constants';
import { FilesBlock } from '../files-block';
import { File } from '@prisma/client';

interface Props {
  files: File[];
  className?: string;
}

export const CmInfoBlock: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <Paragraph
        text="Управление Колледжем осуществляется в соответствии с законодательством Российской Федерации,
        принятым Уставом и строится на сочетании принципов единоначалия и самоуправления."
      />
      <ItemsWithTitle title={'Коллегиальные органы управления:'} items={collegialCmData} />
      <ItemsWithTitle title={'Отделения и корпуса колледжа:'} items={addressData} />
      <div className="mt-4">
        <FilesBlock items={files} />
      </div>
    </section>
  );
};
