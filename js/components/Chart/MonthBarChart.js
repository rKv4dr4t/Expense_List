import React from 'react'

import styles from './MonthBarChart.module.css'

const MonthBarChart = (props) => {
  return (
    <div
    className = {`${props.onlyChild ? styles.onlyChild : styles.longChart}`}
      style={{
        backgroundColor: props.colorMonth,
        width: props.percentageMonth,
      }}
    ></div>
  )
}

export default MonthBarChart
