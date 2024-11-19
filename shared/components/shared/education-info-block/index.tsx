import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './EducationInfoBlock.module.scss';
import { FilesBlock } from '../files-block';
import { filesData } from '@/shared/constants';
import { EducationInfoList } from '../education-info-list';
import { Paragraph } from '../paragraph';
import { TextOrLinkWithStrong } from '../text-or-link-with-strong';
import { File } from '@prisma/client';

interface Props {
  files: File[];
  className?: string;
}

export const EducationInfoBlock: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <EducationInfoList />
      <div className="my-4">
        <FilesBlock
          title="Основные профессиональные образовательные программы"
          items={files.filter((file) => file.category === 4)}
        />
        <FilesBlock
          title="Программы воспитания"
          items={files.filter((file) => file.category === 26)}
        />
        <FilesBlock
          title="Программы государственной итоговой аттестации"
          items={files.filter((file) => file.category === 27)}
        />
      </div>
      <TextOrLinkWithStrong
        title={
          'Лицензия на осуществление образовательной деятельности № Л035-01224-40/00225916 от 04.05.2022:'
        }
        text={
          'выписку из реестра лицензий можно получить на сайте obrnadzor.gov.ru - ФЕДЕРАЛЬНАЯ СЛУЖБА ПО НАДЗОРУ В СФЕРЕ ОБРАЗОВАНИЯ И НАУКИ'
        }
        href={'https://obrnadzor.gov.ru/'}
      />
    </section>
  );
};
