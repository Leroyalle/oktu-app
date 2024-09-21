import React from 'react';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import styles from './FooterContactsItem.module.scss';

interface Props {
  name: string;
  href: string;
  imageUrl: string;
  className?: string;
}

export const FooterContactsItem: React.FC<Props> = ({ name, href, imageUrl, className }) => {
  return (
    <a href={href} className={cn(styles.root, className)}>
      <Image src={imageUrl} alt={name} width={40} height={30} title={name} />
    </a>
  );
};
