import React from 'react';

import ExpenseDate from './ExpenseDate';

import styles from './ExpenseItem.module.css';

const ExpenseItem = (props) => {
  return (
    <li>
      {/* <Card className="expense-item"> */}
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">€ {props.amount}</div>
          <ExpenseDate date={props.date} />
        </div>
      {/* </Card> */}
    </li>
  )
}

export default ExpenseItem
