import React from 'react';
import { cn } from '@/shared/lib/utils';
import { Professionals } from '@prisma/client';
import { Paragraph } from '../paragraph';
import { getTextArray } from '@/shared/lib';
import styles from './BlocksText.module.scss';
import { AnimateBlock } from '../animate-block';

interface Props {
  blocks: Professionals[];
  className?: string;
}

export const BlocksText: React.FC<Props> = ({ blocks, className }) => {
  if (!blocks) {
    return;
  }
  return (
    <div className={cn(styles.root, className)}>
      {blocks.map((block) => (
        <AnimateBlock key={block.id}>
          <h1>{block.title}</h1>
          <div className={styles.info}>
            {getTextArray(block.description).map((p, i) => (
              <Paragraph key={i} text={p} />
            ))}
          </div>
        </AnimateBlock>
      ))}
    </div>
  );
};
