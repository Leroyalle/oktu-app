import React from 'react';
import { cn } from '@/shared/lib/utils';
import { File } from '@prisma/client';
import styles from './ProjectsWrapper.module.scss';
import { navigationData } from '@/shared/constants';
import Link from 'next/link';
import { MoveRight, Undo2 } from 'lucide-react';
import { FilesBlock } from '../files-block';

interface Props {
  files: File[];
  className?: string;
}

export const ProjectsWrapper: React.FC<Props> = ({ files, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <ul>
        {navigationData.bottom.at(-1)?.links.map((link, i) => (
          <li key={i}>
            <Link href={`${link.href}`}>
              <MoveRight />
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <FilesBlock title={'Основные материалы:'} items={files} className="my-4" />
    </section>
  );
};
