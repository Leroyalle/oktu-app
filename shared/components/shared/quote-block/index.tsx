import React from 'react';
import { cn } from '@/shared/lib/utils';
import Image from 'next/image';
import styles from './QuoteBlock.module.scss';
import { Button } from '../../ui';
import Link from 'next/link';
import { QuoteText } from '../quote-text';
import { QuoteWithRelations } from '@/@types/dataDTO';

interface Props {
  quote: QuoteWithRelations | null;
  className?: string;
}

export const QuoteBlock: React.FC<Props> = ({ quote, className }) => {
  if (!quote) {
    return;
  }
  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.inner}>
        <p className={styles.title}>{quote.author}</p>
        <QuoteText text={quote.text} />
        {quote.link && (
          <Link href={quote.link.href}>
            <Button>Из рабочего графика</Button>
          </Link>
        )}
      </div>
      {quote.imageUrl && (
        <Image priority src={quote.imageUrl} alt={'direction'} width={500} height={400} />
      )}
    </div>
  );
};
