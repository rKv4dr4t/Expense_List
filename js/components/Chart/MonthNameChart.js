import React from 'react';

import styles from './MonthNameChart.module.css';

const MonthNameChart = (props) => {
    const month = props.month.toLocaleString('en-US', { month: 'long' });
  return (
    <div className={styles.itemChart}>
      <div className={styles.squareItem} style={{backgroundColor: props.colorMonth}}></div>
      <div className={styles.titleItem}>{month.slice(0, 3)}</div>
    </div>
  )
}

export default MonthNameChart
