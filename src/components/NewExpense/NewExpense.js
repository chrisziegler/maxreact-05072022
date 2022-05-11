import React from 'react'
import { nanoid } from 'nanoid'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({ formSubmitHandler }) => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseWithId = { ...enteredExpenseData, id: nanoid(10) }
    formSubmitHandler(expenseWithId)
  }

  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseDataHandler={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
