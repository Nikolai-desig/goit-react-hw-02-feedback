import React from 'react';
import css from './FeedbackOptions.module.css'

function FeedbackOptions  ({ onLeaveFeedback, options })  {
  return (
    <ul className={css.list}>
      {options.map((option, index) => (
        <li key={index}>
          <button
            type="button"
            className={css.button}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
