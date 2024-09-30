import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FilesBlock } from '../files-block';
import Link from 'next/link';
import { File } from '@prisma/client';
import styles from './EnrolleeWrapper.module.scss';

interface Props {
  files: File[];
  className?: string;
}

export const EnrolleeWrapper: React.FC<Props> = ({ files, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <p className="pageSubTitle">
        Следите за всеми анонсами в <Link href={'/news'}>новостях</Link>
      </p>
      <FilesBlock title={'Основные материалы:'} items={files} className="mt-4" />
    </div>
  );
};
