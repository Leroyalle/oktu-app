import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './BudgetInfoBlock.module.scss';
import { File } from '@prisma/client';
import { FilesBlock } from '../files-block';
import { TextOrLinkWithStrong } from '../text-or-link-with-strong';
import { Paragraph } from '../paragraph';

interface Props {
  files: File[];
  className?: string;
}

export const BudgetInfoBlock: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <TextOrLinkWithStrong title={'Главный бухгалтер -'} text={'Степанова Елена Анатольевна'} />
      <TextOrLinkWithStrong
        title={'Телефон -'}
        text={'8(48439) 6-20-86'}
        href={'tel:84843962086'}
      />
      <TextOrLinkWithStrong
        title={'Элетронный адрес -'}
        text={'14elenastepanova@mail.ru'}
        href={'mailto:14elenastepanova@mail.ru'}
      />
      <div className="my-4">
        <Paragraph
          text={
            'Объём образовательной деятельности: Поступило средств в 2021 г. - 149232,65 т.р. (в т.ч. за счет бюджета субъекта РФ - 135829,23 т.р.)'
          }
        />
        <Paragraph
          text={
            'Поступило средств по договорам об оказании платных образовательных услуг - 3043,87 т.р'
          }
        />
        <Paragraph text={'Израсходовано средств в 2021 г. - 140667,75 т.р.'} />
      </div>
      <div className="mt-8">
        <FilesBlock title={'Прилагаемые документы:'} items={files} />
      </div>
    </section>
  );
};
