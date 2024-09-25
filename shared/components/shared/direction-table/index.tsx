import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './DirectionTable.module.scss';
import { Direction } from '@prisma/client';
import { ContactsTableItem } from '../contacts-table-item';

interface Props {
  items: Direction[];
  className?: string;
}

export const DirectionTable: React.FC<Props> = ({ items, className }) => {
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
    </section>
  );
};
