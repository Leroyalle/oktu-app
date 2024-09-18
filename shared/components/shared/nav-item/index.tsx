import React from 'react';
import { cn } from '@/shared/lib/utils';

interface Props {
  name: string;
  href: string;
  links?: {
    name: string;
    href: string;
  }[];
  className?: string;
}

export const NavItem: React.FC<Props> = ({ name, href, links, className }) => {
  // !console.log(links);
  return (
    <li className={cn('navItem', className)}>
      <a href={`${href}`}>{name}</a>
    </li>
  );
};
