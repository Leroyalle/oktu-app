import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FilesBlock } from '../files-block';
import { File } from '@prisma/client';
import styles from './MarkWrapper.module.scss';
import { TextOrLinkWithStrong } from '../text-or-link-with-strong';
import Image from 'next/image';

interface Props {
  files: File[];
  className?: string;
}

export const MarkWrapper: React.FC<Props> = ({ files, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <FilesBlock items={files} className="mb-8" />

      <div className="mb-8">
        <h1>
          Чтобы оценить условия предоставления услуг используйте QR-код или перейдите по ссылке
          ниже.
        </h1>
        <TextOrLinkWithStrong
          title={'Анкета доступна по QR-коду, а также по прямой ссылке:'}
          text={'https://bus.gov.ru/qrcode/rate/333676'}
          href={'https://bus.gov.ru/qrcode/rate/333676'}
          target="_blank"
        />
        <Image src={'/assets/qr.png'} alt={'QR code'} width={200} height={200} />
      </div>
    </div>
  );
};
