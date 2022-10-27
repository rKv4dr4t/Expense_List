import React from 'react'

import styles from './LongChart.module.css'

import MonthNameChart from './MonthNameChart'
import MonthBarChart from './MonthBarChart'

const LongChart = (props) => {
  let color = []

  {
    props.monthItems.map((dateMonth, index) => {
      if (dateMonth.date.getMonth() == 0) {
        // January
        color.push(`var(--first-gradient)`)
      } else if (dateMonth.date.getMonth() == 1) {
        // February
        color.push(`var(--second-gradient)`)
      } else if (dateMonth.date.getMonth() == 2) {
        // March
        color.push(`var(--third-gradient)`)
      } else if (dateMonth.date.getMonth() == 3) {
        // April
        color.push(`var(--fourth-gradient)`)
      } else if (dateMonth.date.getMonth() == 4) {
        // May
        color.push(`var(--fifth-gradient)`)
      } else if (dateMonth.date.getMonth() == 5) {
        // June
        color.push(`var(--sixth-gradient)`)
      } else if (dateMonth.date.getMonth() == 6) {
        // July
        color.push(`var(--seventh-gradient)`)
      } else if (dateMonth.date.getMonth() == 7) {
        // August
        color.push(`var(--eighth-gradient)`)
      } else if (dateMonth.date.getMonth() == 8) {
        // September
        color.push(`var(--nineth-gradient)`)
      } else if (dateMonth.date.getMonth() == 9) {
        // October
        color.push(`var(--tenth-gradient)`)
      } else if (dateMonth.date.getMonth() == 10) {
        // November
        color.push(`var(--eleventh-gradient)`)
      } else if (dateMonth.date.getMonth() == 11) {
        // December
        color.push(`var(--twelfth-gradient)`)
      }
    })
  }

  return (
    <div>
      <div className={styles.monthsContainer}>
        {props.monthItems.map((dateMonth, index) => {
          return (
            <div key={Math.random()}>
              <MonthNameChart
                month={dateMonth.date}
                key={dateMonth.id}
                colorMonth={color[index]}
              />
            </div>
          )
        })}
      </div>
      <div className={styles.containerBarChart}>
        {props.monthItems.map((dateMonth, index) => {
          return (
            <div key={Math.random()}>
              <MonthBarChart colorMonth={color[index]} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LongChart
