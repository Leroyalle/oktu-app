import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './ObjectsInfoBlock.module.scss';
import { FilesBlock } from '../files-block';
import { objectsData } from '@/shared/constants';
import { File } from '@prisma/client';
import { ItemsWithTitle } from '../items-with-title';
import { Paragraph } from '../paragraph';

interface Props {
  files: File[];
  className?: string;
}

export const ObjectsInfoBlock: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <div className={styles.objects}>
        <ItemsWithTitle
          title={'Отделение 1 г. Обнинск ул. Курчатова д.39, 37:'}
          items={objectsData[1]}
        />
        <ItemsWithTitle
          title={'Отделение 2 г. Обнинск ул. Курчатова д.31:'}
          items={objectsData[2]}
        />
        <ItemsWithTitle
          title={'Отделение 3 г. Обнинск Самсоновский проезд д. 8:'}
          items={objectsData[3]}
        />
      </div>
      <Paragraph
        text={
          'Доступ в здания образовательной организации для лиц с ОВЗ оборудован пандусом, имеется оборудованная санитарная комната, подъёмник и 5 столов для лиц с ОВЗ (опорно-двигательный аппарат)'
        }
      />
      <div className="my-4">
        <FilesBlock items={files} />
      </div>
    </section>
  );
};
