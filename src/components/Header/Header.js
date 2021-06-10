import React from 'react';

import styles from './Header.module.css';

import iconMoon from '../../images/icon-moon.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Todo</h1>
      <img src={iconMoon} className={styles.icon} alt='Dark theme' />
    </header>
  );
}
