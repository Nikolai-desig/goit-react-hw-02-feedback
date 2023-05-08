import React from 'react';
import Feedback from './ToDo/Feedback';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Please leave feedback</h2>
      <Feedback />
    </div>
  );
};

export default App;
