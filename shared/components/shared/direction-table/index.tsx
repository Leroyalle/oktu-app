import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './DirectionTable.module.scss';
import { Direction, File } from '@prisma/client';
import { ContactsTableItem } from '../contacts-table-item';
import { FilesBlock } from '../files-block';

interface Props {
  files: File[];
  items: Direction[];
  className?: string;
}

export const DirectionTable: React.FC<Props> = ({ files, items, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <table>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id} className={cn(i % 2 !== 0 && styles.colored)}>
              <ContactsTableItem
                role={item.role}
                fullName={item.fullName}
                phone={item.phone.toString()}
                email={item.email}
              />
            </tr>
          ))}
        </tbody>
      </table>
      <FilesBlock items={files} className="mt-4" />
    </section>
  );
};
