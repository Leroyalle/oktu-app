import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './SupportCounseling.module.scss';
import { ItemsWithTitle } from '../items-with-title';
import { TextOrLinkWithStrong } from '../text-or-link-with-strong';
import { psychologistData } from '@/shared/constants/support';

interface Props {
  className?: string;
}

export const SupportCounseling: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <ItemsWithTitle title={'Психологическое консультирование:'} items={psychologistData} />
      <TextOrLinkWithStrong
        title={'Психологическая профилактика и просвещение:'}
        text={
          'В колледже работает квалифицированный специалист педагог-психолог; разработана программа психолого-педагогического сопровождения образовательной деятельности обучающихся.'
        }
      />
    </div>
  );
};
