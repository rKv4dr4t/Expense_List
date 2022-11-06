import React, { useState } from 'react'

import './App.module.css'

import AddExpense from './components/Expense/AddExpense'
import ExpenseList from './components/Expense/ExpenseList'

const DUMMY_EXPENSES = [
  {
    id: 'e10',
    title: 'Banana hat',
    amount: 12.99,
    date: new Date(2022, 7, 23),
  },
  {
    id: 'e2',
    title: 'Huge watermelon',
    amount: 128,
    date: new Date(2022, 11, 14),
  },
  {
    id: 'e3',
    title: 'Peanut hoodie',
    amount: 29.49,
    date: new Date(2022, 11, 28),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  // receiving data from child
  const receiveExpenseDataHandler = (enteredExpenseData) => {
    // while the data is receiving, updating the state, so there is a new entry
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses]
    })
  }

  // alphabetical sorting by month name
  expenses.sort(function (a, b) {
    return a.date.getMonth() - b.date.getMonth()
  })

  return (
    <div>
      <AddExpense onSaveExpenseData={receiveExpenseDataHandler} />
      <ExpenseList items={expenses} />
    </div>
  )
}

export default App
