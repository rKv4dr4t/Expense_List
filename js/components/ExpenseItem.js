import React from 'react'

import ExpenseDate from './ExpenseDate'
import ItemCard from './UI/ItemCard'

import styles from './ExpenseItem.module.css'

const ExpenseItem = (props) => {
  return (
    <li className={styles.expenseItem}>
      <ItemCard>
        <div className={styles['expenseItem-element']}>
          <ExpenseDate date={props.date} className={styles['expenseItem-date']} />
          <div className={styles['expenseItem-title']}>{props.title}</div>
          <div className={styles['expenseItem-amount']}>€ {props.amount}</div>
        </div>
      </ItemCard>
    </li>
  )
}

export default ExpenseItem
