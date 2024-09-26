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
          text={'профессиональное образование, дополнительное образование'}
        />
      </li>

      <li>
        <TextOrLinkWithStrong
          title={'Форма обучения -'}
          text={'по всем образовательным программам очная'}
        />
      </li>
      <li>
        <TextOrLinkWithStrong
          title={'Государственная аккредитация -'}
          text={'по всем образовательным программам СПО бессрочная'}
        />
      </li>
    </ol>
  );
};
