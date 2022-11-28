import React from 'react'

import styles from './ExpenseDate.module.css'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day = props.date.getDate()

  return (
    <div className={styles.date}>
      {day} {month.slice(0,3)}
    </div>
  )
}

export default ExpenseDate
