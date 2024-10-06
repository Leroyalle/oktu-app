import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FilesBlock } from '../files-block';
import { File } from '@prisma/client';
import styles from './UnionWrapper.module.scss';
import { Title } from '../title';
import { TextOrLinkWithStrong } from '../text-or-link-with-strong';

interface Props {
  files: File[];
  className?: string;
}

export const UnionWrapper: React.FC<Props> = ({ files, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <FilesBlock
        title={'Первичная профсоюзная организация ГАПОУ КО "ОКТУ"'}
        items={files}
        className="mb-4"
      />
      <div className="mb-4">
        <Title text={'Контактные данные Профсоюза:'} />
        <TextOrLinkWithStrong
          title={'Сайт Обкома профсоюза -'}
          text={'https://www.eseur.ru/kaluga/'}
          href="https://www.eseur.ru/kaluga/"
        />
        <TextOrLinkWithStrong
          title={'Центральный Совет Профсоюза -'}
          text={'http://eseur.ru/'}
          href="https://www.eseur.ru/"
        />
      </div>

      <div className="mb-4">
        <Title text={'Контактные данные председателя Профсоюза колледжа:'} />
        <TextOrLinkWithStrong title={'Тел -'} text={'8 (48439) 6-05-73'} href="84843960573" />
        <TextOrLinkWithStrong
          title={'e-mail -'}
          text={'nb-grot@mail.ru'}
          href="mailto:nb-grot@mail.ru"
        />
      </div>
    </div>
  );
};
