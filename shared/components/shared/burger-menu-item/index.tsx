import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './BurgerMenuItem.module.scss';
import { ChevronDown } from 'lucide-react';

interface Props {
  item: {
    name: string;
    links: {
      name: string;
      href: string;
    }[];
  };
  className?: string;
}

export const BurgerMenuItem: React.FC<Props> = ({ item, className }) => {
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <div className={cn(styles.root, className)}>
      <p onClick={() => setIsOpened(!isOpened)} className={styles.row}>
        {item.name}
        <ChevronDown className={cn(styles.icon, isOpened && styles.isOpenedIcon)} />
      </p>
      <ul className={cn(styles.links, isOpened && styles.isOpened)}>
        {item.links.map(({ name, href }, i) => (
          <li key={i}>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
