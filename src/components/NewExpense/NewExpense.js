import React from 'react'
import { nanoid } from 'nanoid'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({ formSubmitHandler }) => {
  const [isEditing, setIsEditing] = React.useState(false)

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseWithId = {
      ...enteredExpenseData,
      date: new Date(enteredExpenseData.date).toISOString(),
      id: nanoid(10),
    }
    formSubmitHandler(expenseWithId)
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          saveExpenseDataHandler={saveExpenseDataHandler}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  )
}

export default NewExpense
