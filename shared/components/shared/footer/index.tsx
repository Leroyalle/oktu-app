import React from 'react';
import { FooterInfoBlock as InfoBlock } from '../footer-info-block';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <InfoBlock />
      </div>
    </footer>
  );
};
