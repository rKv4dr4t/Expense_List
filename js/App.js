import React, { useState } from 'react'

import './App.module.css'

import AddExpense from './components/Expense/AddExpense'
import ExpenseList from './components/Expense/ExpenseList'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Banana hat',
    amount: 12.99,
    date: new Date(new Date().getFullYear(), 7, 23),
  },
  {
    id: 'e2',
    title: 'Screaming mango',
    amount: 128,
    date: new Date(new Date().getFullYear(), 10, 3),
  },
  {
    id: 'e3',
    title: 'Tomacco',
    amount: 29.49,
    date: new Date(new Date().getFullYear(), 10, 7),
  },
  {
    id: 'e4',
    title: 'Radioactive kiwi',
    amount: 9.89,
    date: new Date(new Date().getFullYear() - 1, 3, 12),
  },
  {
    id: 'e5',
    title: 'Disappointing egg',
    amount: 788,
    date: new Date(new Date().getFullYear() - 1, 7, 25),
  }
]

console.log()

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
    return new Date(a.date) - new Date(b.date)
  })

  return (
    <div>
      <AddExpense onSaveExpenseData={receiveExpenseDataHandler} />
      <ExpenseList items={expenses} />
    </div>
  )
}

export default App
