import React from 'react';
import styles from './Header.module.scss';
import { NavBar } from '../nav-bar';
import { navigationData } from '@/shared/constants';
import { Container } from '../container';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.wrapper}>
        <div className={styles.inner}>
          <NavBar items={navigationData.top} />
        </div>
      </Container>
    </header>
  );
};
