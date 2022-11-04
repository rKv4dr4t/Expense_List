import React from 'react'

import styles from './ExpenseDate.module.css'

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })

  return (
    <div className={styles.date}>
      {day} {month}
    </div>
  )
}

export default ExpenseDate
