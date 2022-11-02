import React from 'react'

import styles from './MonthBarChart.module.css'

const MonthBarChart = (props) => {

  // console.log(props.colorMonth.date.getMonth())


  // if (props.colorMonth.date.getMonth() == 0) {
  //   // January
  //   return (
  //     <div
  //       className={styles.longChart}
  //       style={{ backgroundColor: `var(--first-gradient)` }}
  //     ></div>
  //   )
  //   // color.push(`var(--first-gradient)`)
  // } else if (props.colorMonth.date.getMonth() == 1) {
  //   // February
  //   return (
  //     <div
  //       className={styles.longChart}
  //       style={{ backgroundColor: `var(--second-gradient)` }}
  //     ></div>
  //   )
  //   // color.push(`var(--second-gradient)`)
  // } else if (props.colorMonth.date.getMonth() == 2) {
  //   // March
  //   return (
  //     <div
  //       className={styles.longChart}
  //       style={{ backgroundColor: `var(--third-gradient)` }}
  //     ></div>
  //   )
  // } else if (props.colorMonth.date.getMonth() == 3) {
  //   // April
  //   return (
  //     <div
  //       className={styles.longChart}
  //       style={{ backgroundColor: `var(--fourth-gradient)` }}
  //     ></div>
  //   )
  //   // color.push(`var(--fourth-gradient)`)
  // } else if (props.colorMonth.date.getMonth() == 4) {
  //   // May
  //   return (
  //     <div
  //       className={styles.longChart}
  //       style={{ backgroundColor: `var(--fifth-gradient)` }}
  //     ></div>
  //   )
  //   // color.push(`var(--fifth-gradient)`)
  // } else if (props.colorMonth.date.getMonth() == 5) {
  //   // June
  //   return (
  //     <div
  //       className={styles.longChart}
  //       style={{ backgroundColor: `var(--sixth-gradient)` }}
  //     ></div>
  //   )
  //   // color.push(`var(--sixth-gradient)`)
  // } else if (props.colorMonth.date.getMonth() == 6) {
  //   // July
  //   return (
  //     <div
  //       className={styles.longChart}
  //       style={{ backgroundColor: `var(--seventh-gradient)` }}
  //     ></div>
  //   )
  //   // color.push(`var(--seventh-gradient)`)
  // } else if (props.colorMonth.date.getMonth() == 7) {
  //   // August
  //   return (
  //     <div
  //       className={styles.longChart}
  //       style={{ backgroundColor: `var(--eighth-gradient)` }}
  //     ></div>
  //   )
  //   // color.push(`var(--eighth-gradient)`)
  // } else if (props.colorMonth.date.getMonth() == 8) {
  //   // September
  //   return (
  //     <div
  //       className={styles.longChart}
  //       style={{ backgroundColor: `var(--nineth-gradient)` }}
  //     ></div>
  //   )
  //   // color.push(`var(--nineth-gradient)`)
  // } else if (props.colorMonth.date.getMonth() == 9) {
  //   // October
  //   return (
  //     <div
  //       className={styles.longChart}
  //       style={{ backgroundColor: `var(--tenth-gradient)` }}
  //     ></div>
  //   )
  //   // color.push(`var(--tenth-gradient)`)
  // } else if (props.colorMonth.date.getMonth() == 10) {
  //   // November
  //   return (
  //     <div
  //       className={styles.longChart}
  //       style={{ backgroundColor: `var(--eleventh-gradient)` }}
  //     ></div>
  //   )
  //   // color.push(`var(--eleventh-gradient)`)
  // } else if (props.colorMonth.date.getMonth() == 11) {
  //   // December
  //   return (
  //     <div
  //       className={styles.longChart}
  //       style={{ backgroundColor: `var(--twelfth-gradient)` }}
  //     ></div>
  //   )
  // }










  return (
    <div className={styles.longChart} style={{backgroundColor: props.colorMonth}}></div>
  )
}

export default MonthBarChart
