import React from 'react';
import css from './Statistic.module.css'


const Statistics = ({ good, neutral, bad, total, percentage }) => (
  <div>
    <ul className={css.list}>
      <li className=''>good: {good}</li>
      <li className=''>neutral: {neutral}</li>
      <li className=''>bad: {bad}</li>
      <li className=''>total: {total}</li>
      <li className=''>positive feedback: {percentage}%</li>
    </ul>
  </div>
);

export default Statistics;
