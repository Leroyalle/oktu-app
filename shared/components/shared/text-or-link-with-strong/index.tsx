import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './TextOrLinkWithStrong.module.scss';

interface Props {
  title: string;
  text: string;
  href?: string;
  target?: '_blank';
  className?: string;
}

export const TextOrLinkWithStrong: React.FC<Props> = ({
  title,
  text,
  href,
  target = '_self',
  className,
}) => {
  return (
    <div className={cn(styles.root, className)}>
      <p>
        <strong>{title}</strong>{' '}
        {href ? (
          <a href={href} target={target}>
            {text}
          </a>
        ) : (
          text
        )}
      </p>
    </div>
  );
};
