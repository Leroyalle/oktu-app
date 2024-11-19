import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Paragraph } from '../paragraph';
import styles from './EducationInfoList.module.scss';
import { TextOrLinkWithStrong } from '../text-or-link-with-strong';

interface Props {
  className?: string;
}

export const EducationInfoList: React.FC<Props> = ({ className }) => {
  return (
    <ol className={cn(styles.root, className)}>
      <li>
        <TextOrLinkWithStrong title={'Обучение -'} text={'на русском языке'} />
      </li>
      <li>
        <TextOrLinkWithStrong
          title={'Реализуемые уровни образования -'}
          text={
            'профессиональное образование, дополнительное образование, профессиональное обучение'
          }
        />
      </li>

      <li>
        <TextOrLinkWithStrong title={'Форма обучения -'} text={'очная, заочная'} />
      </li>
      <li>
        <TextOrLinkWithStrong
          title={'Государственная аккредитация -'}
          text={'серия № А007-01224-40/01156045 от 01.02.2016, бессрочная'}
        />
      </li>
    </ol>
  );
};
