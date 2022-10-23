import React, { useState } from 'react'

// import Card from './UI/Card';
import Button from './UI/Button'

import styles from './AddExpense.module.css'

const AddExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount
    }
    console.log(expenseData)
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  }

  const resetHandler = (event) => {
    event.preventDefault()
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  }

  return (
    <div>
      <div className={styles.input}>
        <form onSubmit={submitHandler} onReset={resetHandler}>
          <div className={styles.inputContainer} id={styles.inputTitle}>
            <label>Title</label>
            <input
              id="title"
              type="text"
              className={styles.longerInput}
              value={enteredTitle}
              onChange={titleHandler}
            ></input>
          </div>
          <div className={styles.inputContainer} id={styles.inputDate}>
            <label>Date</label>
            <input
              id="date"
              type="date"
              className={styles.shorterInput}
              value={enteredDate}
              onChange={dateHandler}
            ></input>
          </div>
          <div className={styles.inputContainer} id={styles.space}></div>
          <div className={styles.inputContainer} id={styles.inputAmount}>
            <label>Amount</label>
            <input
              id="amount"
              type="number"
              className={styles.shorterInput}
              value={enteredAmount}
              onChange={amountHandler}
            ></input>
          </div>
          <div className={styles.buttonContainer}>
            <div id={styles.innerButtonContainer}>
              <Button type="reset" theme="cancelButton">
                CANCEL
              </Button>
              <Button type="submit" theme="regularButton">
                ADD EXPENSE
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddExpense