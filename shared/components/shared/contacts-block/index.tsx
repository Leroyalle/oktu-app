import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './ContactsBlock.module.scss';
import { TextOrLinkWithStrong as RowInfo } from '../text-or-link-with-strong';
import { ItemsWithTitle as Address } from '../items-with-title';
import { addressBuildingData as addressData } from '../../../constants';

interface Props {
  className?: string;
}

export const ContactsBlock: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <RowInfo
        title={'Полное название:'}
        text={
          'Государственное автономное профессиональное образовательное учреждение Калужской области «Обнинский колледж технологий и услуг» (ГАПОУ КО "ОКТУ")'
        }
      />
      <RowInfo
        title={'Юридический адрес:'}
        text={'249032, Калужская область, город Обнинск, ул Курчатова, д. 39'}
      />
      <RowInfo title={'Руководитель:'} text={'Лаптева Ксения Николаевна'} />
      <RowInfo title={'Факс:'} text={'+7 (484) 396-01-67'} href={'tel:74843960167'} />
      <RowInfo
        title={'Адрес электронной почты:'}
        text={'pl_26@mail.ru'}
        href={'mailto:pl_26@mail.ru'}
      />
      <Address title={'Адреса отделений ОКТУ:'} items={addressData} />
    </section>
  );
};
