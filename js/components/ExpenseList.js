import React from 'react'

import ExpenseItem from './ExpenseItem'

import styles from './ExpenseList.module.css'

const ExpenseList = (props) => {
  return (
    <div className={styles.expense}>
      <select className={styles.year}>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
      </select>
      <ul>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList
