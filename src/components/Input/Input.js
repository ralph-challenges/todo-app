import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ handleOnSubmit, textInput }) {
  return (
    <form onSubmit={handleOnSubmit}>
      <input ref={textInput} />
    </form>
  );
}

Input.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  textInput: PropTypes.shape({ current: PropTypes.elementType }).isRequired,
};
