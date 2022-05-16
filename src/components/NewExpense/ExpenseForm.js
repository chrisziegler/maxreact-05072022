import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ saveExpenseDataHandler, setIsEditing }) => {
  const [newExpense, setNewExpense] = useState({
    title: '',
    amount: '',
    date: '',
  })

  const newExpenseHandler = e => {
    e.preventDefault()
    saveExpenseDataHandler({
      title: newExpense.title,
      amount: +newExpense.amount,
      date: new Date(newExpense.date),
    })
    setNewExpense({ title: '', amount: '', date: '' })
    setIsEditing(false)
  }

  const handleChange = event => {
    let { value } = event.target
    setNewExpense(prevState => {
      return {
        ...prevState,
        [event.target.name]: value,
      }
    })
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <form onSubmit={newExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="form-title">Title</label>
          <input
            type="text"
            name="title"
            id="form-title"
            value={newExpense.title}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="form-amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            id="form-amount"
            value={newExpense.amount}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="form-date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025"
            name="date"
            id="form-date"
            value={newExpense.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="new-expenses__wrapper">
        <div className="new-expense__actions">
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
