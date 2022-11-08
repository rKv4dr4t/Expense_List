import React from 'react'

import styles from './ExpenseFilter.module.css'

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value)
  }

  // return not duplicated values
  const notDuplicated = props.items.reduce((acc, current) => {
    const x = acc.find(
      (item) => item.date.getFullYear() === current.date.getFullYear(),
    )
    if (!x) {
      return acc.concat([current])
    } else {
      return acc
    }
  }, [])

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <select
          value={props.selected}
          onChange={dropdownChangeHandler}
          className={styles.year}
        >
          {/* generate option tag in the select tag based on the entries' year */}
          {notDuplicated.map((x) => (
            <option value={x.date.getFullYear()} key={Math.random().toString()}>
              {x.date.getFullYear()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
