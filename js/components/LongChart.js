import React from 'react'

import styles from './LongChart.module.css'

import MonthNameChart from './MonthNameChart'
import MonthBarChart from './MonthBarChart'

const LongChart = (props) => {
  let duplicatesCount = {}
  let data = props.monthItems

  // return not duplicated values
  const notDuplicated = data.reduce((acc, current) => {
    const x = acc.find(
      (item) => item.date.getMonth() === current.date.getMonth(),
    )
    if (!x) {
      return acc.concat([current])
    } else {
      return acc
    }
  }, [])

  // count duplicates
  data.forEach(function (x) {
    duplicatesCount[x.date.getMonth()] =
      (duplicatesCount[x.date.getMonth()] || 0) + 1
  })

  // calculate the percentage of each month occurancy
  const percentageCalc = (x) => {
    if (duplicatesCount[x] > 0) {
      return ((duplicatesCount[x] * 100) / data.length) + '%'
    }
  }

  // apply color
  const colorChanger = (dateMonth) => {
    if (dateMonth.date.getMonth() == 0) {
      // January
      return `var(--first-gradient)`
    } else if (dateMonth.date.getMonth() == 1) {
      // February
      return `var(--second-gradient)`
    } else if (dateMonth.date.getMonth() == 2) {
      // March
      return `var(--third-gradient)`
    } else if (dateMonth.date.getMonth() == 3) {
      // April
    } else if (dateMonth.date.getMonth() == 4) {
      // May
      return `var(--fifth-gradient)`
    } else if (dateMonth.date.getMonth() == 5) {
      // June
      return `var(--sixth-gradient)`
    } else if (dateMonth.date.getMonth() == 6) {
      // July
      return `var(--seventh-gradient)`
    } else if (dateMonth.date.getMonth() == 7) {
      // August
      return `var(--eighth-gradient)`
    } else if (dateMonth.date.getMonth() == 8) {
      // September
      return `var(--nineth-gradient)`
    } else if (dateMonth.date.getMonth() == 9) {
      // October
      return `var(--tenth-gradient)`
    } else if (dateMonth.date.getMonth() == 10) {
      // November
      return `var(--eleventh-gradient)`
    } else if (dateMonth.date.getMonth() == 11) {
      // December
      return `var(--twelfth-gradient)`
    }
  }

  return (
    <div>
      <div className={styles.monthsContainer}>
        {notDuplicated.map((dateMonth, index) => {
          return (
            <div key={Math.random()}>
              <MonthNameChart
                month={dateMonth.date}
                key={dateMonth.id}
                colorMonth={colorChanger(dateMonth)}
              />
            </div>
          )
        })}
      </div>
      <div className={styles.contContainerBarChart} > 
        <div className={styles.containerBarChart}>
          {notDuplicated.map((dateMonth, index) => {
            return (
              <MonthBarChart
                key={Math.random()}
                colorMonth={colorChanger(dateMonth)}
                percentageMonth={percentageCalc(dateMonth.date.getMonth())}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LongChart
