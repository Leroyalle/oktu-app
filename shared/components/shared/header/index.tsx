'use client';
import React from 'react';
import styles from './Header.module.scss';
import { NavBar } from '../nav-bar';
import { navigationData } from '@/shared/constants';
import { Container } from '../container';
import { Logo } from '../logo';
import { useScrollPage } from '@/shared/hooks';
import { cn } from '@/shared/lib/utils';

export const Header: React.FC = () => {
  const visible = useScrollPage();
  return (
    <header className={cn(styles.header, !visible && styles.goOff)}>
      <Container className={styles.wrapper}>
        <div>
          <Logo />
        </div>
        <div className={styles.inner}>
          <NavBar items={navigationData.top} color={'text-white hover:text-white/70'} />
        </div>
      </Container>
    </header>
  );
};
