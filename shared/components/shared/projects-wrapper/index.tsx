import React from 'react';
import { cn } from '@/shared/lib/utils';
import { File } from '@prisma/client';
import styles from './ProjectsWrapper.module.scss';
import { navigationData } from '@/shared/constants';
import Link from 'next/link';
import { MoveRight, Undo2 } from 'lucide-react';

interface Props {
  className?: string;
}

export const ProjectsWrapper: React.FC<Props> = ({ className }) => {
  console.log(navigationData.bottom[-1]);
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
    </section>
  );
};
