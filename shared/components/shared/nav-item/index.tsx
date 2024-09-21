'use client';
import React from 'react';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import styles from './NavItem.module.scss';
import { ChevronDown } from 'lucide-react';
interface Props {
  name: string;
  href: string;
  links: {
    name: string;
    href: string;
  }[];
  itemStyles?: string;
  className?: string;
}

export const NavItem: React.FC<Props> = ({ name, href, links, itemStyles, className }) => {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef<HTMLLIElement>(null);

  const hoverHandler = () => {
    setVisible(true);
  };
  const hoverHandlerRemove = () => {
    setVisible(false);
  };

  React.useEffect(() => {
    const refCurrent = ref.current;
    if (refCurrent) {
      refCurrent?.addEventListener('mouseover', hoverHandler);
      refCurrent?.addEventListener('mouseleave', hoverHandlerRemove);
    }
    return () => {
      refCurrent?.removeEventListener('mouseover', hoverHandler);
      refCurrent?.removeEventListener('mouseleave', hoverHandlerRemove);
    };
  });
  return (
    // TODO: чтобы не было дыры между элементом и ссылками
    <li ref={ref} className={cn(styles.navItem, className)}>
      <div className={cn(styles.item, itemStyles)}>
        {links.length > 0 && <ChevronDown className={styles.icon} />}
        <Link href={`${href}`}>{name}</Link>
      </div>
      {links.length > 0 && (
        <ul className={cn(`${styles.links} ${visible && styles.visible} scrollbar`)}>
          {links?.map(({ name, href }, i) => (
            <li key={i} className={styles.link}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
