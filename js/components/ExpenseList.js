import React from 'react'

// import Card from './UI/Card';
import ExpenseItem from './ExpenseItem'

import styles from './ExpenseList.module.css'

const ExpenseList = (props) => {
  return (
    <ul className={styles.expense}>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  )
}

export default ExpenseList
