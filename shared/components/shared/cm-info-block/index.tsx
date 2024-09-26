import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './CmInfoBlock.module.scss';
import { Paragraph } from '../paragraph';
import { ItemsWithTitle } from '../items-with-title';
import { collegialCmData } from '@/shared/constants/collegial-cm';
import { addressBuildingData as addressData, filesData } from '../../../constants';
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
      <Paragraph
        text="Единоличным исполнительным органом Учреждения является директор Колледжа – Колодяжная
        Наталия Васильевна, назначенная на должность 26 февраля 2007 года Министерством образования,
        культуры и спорта Калужской области, успешная аттестация которой прошла 27.02.2017 г. приказ
        № 34 л/с."
      />

      <ItemsWithTitle title={'Коллегиальные органы управления:'} items={collegialCmData} />
      <ItemsWithTitle title={'Отделения и корпуса колледжа:'} items={addressData} />
      <div className="mt-4">
        <FilesBlock items={files} />
      </div>
    </section>
  );
};
