import React from 'react';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import styles from './Direction.module.scss';
import { Title } from '../title';

interface Props {
  className?: string;
}

export const Direction: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div>
        <h4 className={styles.title}>
          Ксения Николаевна <br /> Лаптева
        </h4>
        <p className={styles.subtitle}>
          Директор «Обнинского колледжа технологий <br /> и услуг»
        </p>
      </div>
      <Image
        src={
          'https://avatars.mds.yandex.net/i?id=04793759d6d25bde7523739e1031b8163f2490adf2c4120a-13206706-images-thumbs&n=13'
        }
        alt={'direction'}
        width={500}
        height={400}
      />
    </div>
  );
};
