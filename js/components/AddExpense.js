import React from 'react'

const AddExpense = (props) => {
  return (
    <div>
      <form>
        <label>Title</label>
        <input id="title" type="text"></input>
        <label>Date</label>
        <input id="date" type="date"></input>
        <label>Amount</label>
        <input id="amount" type="number"></input>
      </form>
    </div>
  )
}

export default AddExpense