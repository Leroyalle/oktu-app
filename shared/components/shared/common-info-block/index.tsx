import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './CommonInfoBlock.module.scss';
import { Paragraph } from '../paragraph';
import { TextOrLinkWithStrong as InfoItem } from '../text-or-link-with-strong';
import { ItemsWithTitle } from '../items-with-title';
import { addressBuildingData as addressData } from '../../../constants';
import { chartData } from '@/shared/constants/chart';
import { FilesBlock } from '../files-block';
import { filesData } from '../../../constants';
import { File } from '@prisma/client';

interface Props {
  files: File[];
  className?: string;
}

export const CommonInfoBlock: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <Paragraph
        text={
          'Государственное автономное профессиональное образовательное учреждение Калужской области «Обнинский колледж технологий и услуг»'
        }
        className="font-extrabold"
      />
      <Paragraph
        text={
          'Государственное автономное профессиональное образовательное учреждение Калужской области «Обнинский колледж технологий и услуг» создано в 1978 году. В соответствии с приказом Министерства образования и науки Калужской области № 402 от 27.03.2013 г. произошла реорганизация колледжа путем присоединения к нему ГБОУ НПО «Профессиональный лицей №19» и ГБОУ СПО «Обнинский индустриальный техникум».'
        }
      />
      <InfoItem
        title={'Учредитель:'}
        text={'Министерство образования и науки Калужской области.'}
      />
      <InfoItem
        title={'Юридический адрес:'}
        text={'249032, Калужская область, город Обнинск, ул Курчатова, д. 39'}
      />
      <InfoItem title={'Руководитель:'} text={'Лаптева Ксения Николаевна'} />
      <InfoItem title={'Факс:'} text={'+7(484) 396-01-67'} href={'tel:213123123'} />
      <InfoItem
        title={'Адрес электронной почты:'}
        text={'pl_26@mail.ru'}
        href={'mailto:pl_26@mail.ru'}
      />
      <ItemsWithTitle
        title={'Места осуществления образовательной деятельности:'}
        items={addressData}
      />
      <ItemsWithTitle title={'График работы всех отделений:'} items={chartData} />

      <div className="mt-4">
        <FilesBlock items={files} />
      </div>
    </section>
  );
};
