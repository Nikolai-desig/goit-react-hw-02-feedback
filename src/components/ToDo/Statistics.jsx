import React from 'react';


const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <div>
    <ul>
      <li className=''>good: {good}</li>
      <li className=''>neutral: {neutral}</li>
      <li className=''>bad: {bad}</li>
      <li className=''>total: {total}</li>
      <li className=''>positive feedback: {percentage}%</li>
    </ul>
  </div>
);

export default Statistics;
