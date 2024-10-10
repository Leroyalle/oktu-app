import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './Faq.module.scss';
import { FAQ } from '@prisma/client';
import { FaqItem } from '../faq-item';
import { Title } from '../title';
import { Button } from '../../ui';
import Link from 'next/link';

interface Props {
  title?: string;
  items: FAQ[];
  hasLink?: boolean;
  className?: string;
}

export const Faq: React.FC<Props> = ({ title, items, hasLink, className }) => {
  if (!items || items.length === 0) {
    return;
  }

  return (
    <section className={cn(styles.root, className)}>
      {title && <Title text={title} size="lg" className={styles.title} />}
      <div className={styles.wrapper}>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <FaqItem className={'py-6'} question={item.question} answer={item.answer} />
              <hr />
            </li>
          ))}
        </ul>
        {hasLink && (
          <Link href={'/faq'} className="block mb-[15px]">
            <Button className="rounded-[4px]">Посмотреть все</Button>
          </Link>
        )}
      </div>
    </section>
  );
};
