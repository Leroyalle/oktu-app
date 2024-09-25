import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './TechStaff.module.scss';
import { ContactsTableItem } from '../contacts-table-item';
import { TeachStaff } from '@prisma/client';

interface Props {
  items: TeachStaff[];
  className?: string;
}

export const TechStaffTable: React.FC<Props> = ({ items, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <table>
        <thead>
          <tr>
            <th>Должность</th>
            <th>ФИО</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id} className={cn(i % 2 === 0 && styles.colored)}>
              <ContactsTableItem role={item.role} fullName={item.fullName} />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
