import React from 'react'

import ItemChart from './ItemChart'

import styles from './LongChart.module.css'


const LongChart = (props) => {
  return (
    <div>
      <div className={styles.monthsContainer}>
      {props.monthItems.map((dateMonth) => (
        <ItemChart month={dateMonth.date} key={dateMonth.id} />
        ))}



      </div>
      <div className={styles.longChart}></div>
    </div>
  )
}

export default LongChart