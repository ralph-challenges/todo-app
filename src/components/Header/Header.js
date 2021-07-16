import React, { useEffect, useState } from 'react';

import styles from './Header.module.css';

import iconMoon from '../../images/icon-moon.svg';
import iconSun from '../../images/icon-sun.svg';

export default function Header() {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  function setHandleTheme(value) {
    window.localStorage.setItem('theme', value);
    setTheme(value);
  }

  function handleTheme() {
    const el = document.body;

    if (el.getAttribute('data-theme') === 'dark') {
      setHandleTheme('light');
    } else {
      setHandleTheme('dark');
    }
  }

  const iconImg =
    window.localStorage.getItem('theme') === 'dark' ? iconMoon : iconSun;

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Todo</h1>
      <button className={styles.button} type='button' onClick={handleTheme}>
        <img src={iconImg} className={styles.icon} alt='Dark theme' />
      </button>
    </header>
  );
}
