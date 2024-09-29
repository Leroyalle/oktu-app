'use client';
import React from 'react';
import styles from './Header.module.scss';
import { NavBar } from '../nav-bar';
import { navigationData } from '@/shared/constants';
import { Container } from '../container';
import { Logo } from '../logo';
import { useScrollPage } from '@/shared/hooks';
import { cn } from '@/shared/lib/utils';
import { BurgerMenuButton } from '../burger-menu-button';
import { BurgerMenuBody } from '../burger-menu-body';

export const Header: React.FC = () => {
  const visible = useScrollPage();
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <header className={cn(styles.header, !visible && !isOpened && styles.goOff)}>
      <Container className={styles.wrapper}>
        <div>
          <Logo />
        </div>
        <div className={styles.inner}>
          <NavBar
            items={navigationData.top}
            itemStyles={'text-white hover:text-white/70'}
            className={'showDesktop'}
          />
          <BurgerMenuButton
            isOpened={isOpened}
            onClick={() => setIsOpened(!isOpened)}
            className={'showMobile'}
          />
        </div>
      </Container>
      <div className="showMobile">
        <div className={cn(styles.mobile, isOpened && styles.mobileIsOpened, 'scrollbar ')}>
          <BurgerMenuBody items={navigationData.mobile} />
        </div>
      </div>
      <div className="showDesktop">
        <div className={styles.navBottom}>
          <NavBar
            items={navigationData.bottom}
            itemStyles={'text-black hover:text-blue-700 pb-[15px]'}
            className={'showDesktop'}
          />
        </div>
      </div>
    </header>
  );
};
