import React, { useState } from 'react'

import './App.module.css'

import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Banana hat',
    amount: 94.12,
    date: new Date(2022, 11, 14),
  },
  {
    id: 'e2',
    title: 'Broken keyboard',
    amount: 399,
    date: new Date(2022, 5, 23),
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

const App = (props) => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
          return [expense, ...prevExpenses];
        });
      };

  return (
    <div>
      <AddExpense />
      <ExpenseList items={expenses}/>
    </div>
  )
}

export default App
