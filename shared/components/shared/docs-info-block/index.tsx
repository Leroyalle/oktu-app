import React from 'react';
import { cn } from '@/shared/lib/utils';
import { TextOrLinkWithStrong } from '../text-or-link-with-strong';
import styles from './DocsInfoBlock.module.scss';
import { File } from '@prisma/client';
import { FilesBlock } from '../files-block';
import { Title } from '../title';

interface Props {
  files: File[];
  otherFiles: File[];
  className?: string;
}

export const DocsInfoBlock: React.FC<Props> = ({ files, otherFiles, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <TextOrLinkWithStrong
        title={
          'Лицензия на осуществление образовательной деятельности № Л035-01224-40/00225916 от 04.05.2022:'
        }
        text={
          'выписку из реестра лицензий можно получить на сайте obrnadzor.gov.ru - ФЕДЕРАЛЬНАЯ СЛУЖБА ПО НАДЗОРУ В СФЕРЕ ОБРАЗОВАНИЯ И НАУКИ'
        }
        href={'https://obrnadzor.gov.ru/'}
      />
      <div className="my-4">
        <FilesBlock items={files} />
      </div>
      <div className="my-4">
        <FilesBlock title={'Другие документы:'} items={otherFiles} />
      </div>
    </section>
  );
};
