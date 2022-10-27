import React from 'react';

import styles from './MonthBarChart.module.css';

const MonthBarChart = (props) => {
  return (
    <div className={styles.longChart} style={{backgroundColor: props.colorMonth}}></div>
  )
}

export default MonthBarChart
