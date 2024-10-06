import React from 'react';
import { cn } from '@/shared/lib/utils';
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
    <section className={cn(styles.wrapper, 'quoteBlock', className)}>
      <div className={styles.inner}>
        <p className={styles.title}>{quote.author}</p>
        <QuoteText text={quote.text} />
        {quote.link && (
          <Link href={quote.link.href}>
            <Button>{quote.link.name}</Button>
          </Link>
        )}
      </div>
      {quote.imageUrl && <img src={quote.imageUrl} alt={'direction'} width={400} height={400} />}
    </section>
  );
};
