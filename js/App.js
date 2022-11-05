import React, { useState } from 'react'

import './App.module.css'

import AddExpense from './components/Expense/AddExpense'
import ExpenseList from './components/Expense/ExpenseList'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e10',
    title: 'Banana hat',
    amount: 94.12,
    date: new Date(2022, 11, 14),
  },
  {
    id: 'e2',
    title: 'Broken keyboard',
    amount: 399,
    date: new Date(2022, 7, 23),
  },
  {
    id: 'e3',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2022, 11, 28),
  },
  {
    id: 'e4',
    title: 'Blue watermelon',
    amount: 39.79,
    date: new Date(2022, 2, 21),
  },
]

// alphabetical sorting by month name
DUMMY_EXPENSES.sort(function (a, b) {
  return a.date.getMonth() - b.date.getMonth()
})

const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  // receiving data from child
  const receiveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    // while the data is receiving, updating the state, so there is a new entry
    setExpenses((prevExpenses) => {
      return [enteredExpenseData, ...prevExpenses]
    })
    console.log(expenseData)
  }


  return (
    <div>
      <AddExpense onSaveExpenseData={receiveExpenseDataHandler} />
      {/* <NewExpense /> */}
      <ExpenseList items={expenses} />
    </div>
  )
}

export default App
