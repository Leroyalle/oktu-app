'use client';
import React from 'react';
import styles from './MainSliderItem.module.scss';
import Link from 'next/link';
import { Button } from '../../ui';
import { cn } from '@/shared/lib/utils';

interface Props {
  title: string | null;
  text: string | null;
  link: {
    name: string;
    href: string;
  } | null;
  imageUrl: string;
  className?: string;
}

export const MainSliderItem: React.FC<Props> = ({ title, text, link, imageUrl, className }) => {
  return (
    <div
      className={cn('relative h-full w-full max-h-[800px]', className)}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '800px',
        backgroundImage: `url(${imageUrl})`,
      }}>
      <div className={styles.inner}>
        {title && (
          <div className={styles.content}>
            <h4>{title}</h4>
            {text && <p>{text}</p>}
            {link?.name && link.href && (
              <Link href={`${link.href}`}>
                <Button>{link.name}</Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
