import React from 'react';
import PropTypes from 'prop-types';

import styles from './Checkbox.module.css';

export default function Radio({ label, index }) {
  return (
    <>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={`check-${index}`}
      />
      <label className={styles.label} htmlFor={`check-${index}`}>
        {label}
      </label>
    </>
  );
}

Radio.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};
