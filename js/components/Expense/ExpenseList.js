import React, { useState } from 'react'

import styles from './ExpenseList.module.css'

import ExpenseItem from './ExpenseItem'
import LongChart from '../Chart/LongChart'
import ExpensesFilter from './ExpenseFilter'

const ExpenseList = (props) => {
  // filter for the selected year
  const [filteredYear, setFilteredYear] = useState('2022')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })



  return (
    <div className={styles.expense}>
      {/* <select className={styles.year}>
        <option>2022</option>
        <option>2021</option>
        <option>2020</option>
      </select> */}

      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <LongChart monthItems={props.items} />

      {/* {props.items.map((expense) => ( */}
      <ul>
        {filteredExpenses.map((expense) => (
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
