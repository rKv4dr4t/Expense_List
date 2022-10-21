import React, { useState } from 'react'

import './App.module.css'

import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Banana hat',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
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
