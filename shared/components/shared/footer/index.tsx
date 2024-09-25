import React from 'react';
import styles from './Footer.module.scss';
import { Container } from '../container';
import { navigationData } from '@/shared/constants';
import { FooterNavigationList as NavigationList } from '../footer-navigation-list';
import { FooterInfoBlock as InfoBlock } from '../footer-info-block';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <Container className={styles.wrapper}>
        <InfoBlock items={navigationData.footerInfo} />
        <NavigationList items={navigationData.footerNav} />
      </Container>
    </footer>
  );
};
