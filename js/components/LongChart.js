import React from 'react'

import ItemChart from './ItemChart'

import styles from './LongChart.module.css'

const LongChart = (props) => {
  let color
  return (
    <div>
      <div className={styles.monthsContainer}>
        {props.monthItems.map((dateMonth) => {
          if (dateMonth.date.getMonth() == 0) {
            // January
            color = `var(--first-gradient)`;
          } else if (dateMonth.date.getMonth() == 1) {
            // February
            color = `var(--second-gradient)`;
          } else if (dateMonth.date.getMonth() == 2) {
            // March
            color = `var(--third-gradient)`;
          } else if (dateMonth.date.getMonth() == 3) {
            // April
            color = `var(--fourth-gradient)`;
          } else if (dateMonth.date.getMonth() == 4) {
            // May
            color = `var(--fifth-gradient)`;
          } else if (dateMonth.date.getMonth() == 5) {
            // June
            color = `var(--sixth-gradient)`;
          } else if (dateMonth.date.getMonth() == 6) {
            // July
            color = `var(--seventh-gradient)`;
          } else if (dateMonth.date.getMonth() == 7) {
            // August
            color = `var(--eighth-gradient)`;
          } else if (dateMonth.date.getMonth() == 8) {
            // September
            color = `var(--nineth-gradient)`;
          } else if (dateMonth.date.getMonth() == 9) {
            // October
            color = `var(--tenth-gradient)`;
          } else if (dateMonth.date.getMonth() == 10) {
            // November
            color = `var(--eleventh-gradient)`;
          } else if (dateMonth.date.getMonth() == 11) {
            // December
            color = `var(--twelfth-gradient)`;
          } 
          return (
            <ItemChart
              month={dateMonth.date}
              key={dateMonth.id}
              colorMonth={color}
            />
          )
        })}
      </div>
      <div className={styles.longChart}></div>
    </div>
  )
}

export default LongChart
