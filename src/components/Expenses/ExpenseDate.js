import React from 'react'

import './ExpenseDate.css'

const ExpenseDate = ({ date }) => {
  // needed to convert form data "YYYY-MM-DD" to a date object first
  const month = new Date(date).toLocaleString('en-US', { month: 'long' })
  const day = new Date(date).toLocaleString('en-US', { day: '2-digit' })
  const year = new Date(date).getFullYear()
  // const year = date.getFullYear()
  // const year = date.toLocaleString('en-US', {})
  // console.log(date.getFullYear())

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  )
}

export default ExpenseDate
