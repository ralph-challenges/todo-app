import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

export default function Input({ handleOnSubmit, textInputRef }) {
  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <input
        placeholder='Create a new todo...'
        className={styles.input}
        ref={textInputRef}
      />
    </form>
  );
}

Input.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  textInputRef: PropTypes.shape({
    current: PropTypes.shape({
      value: PropTypes.string,
    }),
  }).isRequired,
};
