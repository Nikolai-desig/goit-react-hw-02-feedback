import React from 'react';

const FeedbackOptions = ({ onHandleGood, onHandleNeutral, onHandleBad }) => {
  return (
    <div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          type="button"
          className="btn btn-success"
          onClick={onHandleGood}
        >
          Good
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={onHandleNeutral}
        >
          Netural
        </button>
        <button type="button" className="btn btn-danger" onClick={onHandleBad}>
          Bad
        </button>
      </div>
    </div>
  );
};

export default FeedbackOptions;
