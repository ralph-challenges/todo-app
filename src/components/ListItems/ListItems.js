import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

import styles from './ListItems.module.css';

export default function ListItems({ todos }) {
  return (
    <ul className={styles['list-items']}>
      {todos.map(({ value, key }, index) => (
        <ListItem key={key} value={value} index={index} />
      ))}

      {todos.length === 0 && <li className={styles.empty}>Empty List...</li>}
    </ul>
  );
}

ListItems.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      completed: PropTypes.bool,
      key: PropTypes.number,
    }),
  ).isRequired,
};
