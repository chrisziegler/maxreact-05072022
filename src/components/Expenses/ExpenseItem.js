import React from 'react'

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = ({ title, date, amount }) => {
  console.log(amount)
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${Number(amount).toFixed(2)}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  )
}

export default ExpenseItem
