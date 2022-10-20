import React from 'react'

import Card from './UI/Card'
import Button from './UI/Button'

import styles from './AddExpense.module.css'

const AddExpense = (props) => {
  return (
    <div>
      <Card className={styles.input}>
        <form>
          <div className={styles.inputContainer} id={styles.inputTitle}>
            <label>Title</label>
            <input
              id="title"
              type="text"
              className={styles.longerInput}
            ></input>
          </div>
          <div className={styles.inputContainer} id={styles.inputDate}>
            <label>Date</label>
            <input
              id="date"
              type="date"
              className={styles.shorterInput}
            ></input>
          </div>
          <div className={styles.inputContainer} id={styles.space}></div>
          <div className={styles.inputContainer} id={styles.inputAmount}>
            <label>Amount</label>
            <input
              id="amount"
              type="number"
              className={styles.shorterInput}
            ></input>
          </div>
          <div className={styles.buttonContainer}>
            <div id={styles.innerButtonContainer}>
              <Button type="submit" theme="cancelButton">
                CANCEL
              </Button>
              <Button type="submit" theme="regularButton">
                ADD EXPENSE
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default AddExpense
