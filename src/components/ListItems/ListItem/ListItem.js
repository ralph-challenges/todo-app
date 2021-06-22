import React from 'react';
import PropTypes from 'prop-types';
import crossIcon from '../../../images/icon-cross.svg';

import Button from '../../Button';
import Checkbox from '../../Checkbox';

import styles from './ListItem.module.css';

export default function ListItem({ value, index }) {
  return (
    <li className={styles['list-item']}>
      <Checkbox label={value} index={index} />

      <Button
        label={<img alt='Remove item' src={crossIcon} />}
        className={styles.remove}
        type='link'
      />
    </li>
  );
}

ListItem.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
