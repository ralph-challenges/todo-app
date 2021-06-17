import React from 'react';
import PropTypes from 'prop-types';
import crossIcon from '../../../images/icon-cross.svg';

import styles from './ListItem.module.css';

export default function ListItem({ value, index }) {
  return (
    <li className={styles['list-item']}>
      <input className={styles.input} type='checkbox' id={`check-${index}`} />

      <label className={styles.label} htmlFor={`check-${index}`}>
        {value}
      </label>

      <button className={styles.remove} type='button'>
        <img alt='Remove item' src={crossIcon} />
      </button>
    </li>
  );
}

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
