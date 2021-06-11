import React, { useState, useRef } from 'react';

import Header from '../Header';
import Input from '../Input';

import styles from './App.module.css';

export default function App() {
  const textInputRef = useRef(null);
  const [todos, setTodos] = useState([]);

  function handleOnSubmit(event) {
    event.preventDefault();

    const newTodo = {
      value: textInputRef.current.value,
      completed: false,
      key: Date.now(),
    };
    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    textInputRef.current.value = '';
  }

  return (
    <div className={styles.container}>
      <Header />
      <Input textInputRef={textInputRef} handleOnSubmit={handleOnSubmit} />

      <ul>
        {todos.map(({ value, key }) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
