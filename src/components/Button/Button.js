import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Button.module.css';

export default function Button({ label, className, type }) {
  const buttonStyle = cn(className, {
    [styles.link]: type === 'link',
  });

  return (
    <button type='button' className={buttonStyle}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'text',
  className: '',
};
