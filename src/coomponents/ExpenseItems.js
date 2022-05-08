import React from 'react'
import './ExpenseItems.css'

const ExpenseItems = () => {
  return (
    <div className="expense-item">
      <div>May 7, 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">1247.97</div>
      </div>
    </div>
  )
}

export default ExpenseItems
