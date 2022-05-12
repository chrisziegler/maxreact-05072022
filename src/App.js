import React, { useState, useEffect } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { expenseData } from './expense_data'
const App = () => {
  useEffect(() => {
    setData(expenseData)
  }, [])

  const [data, setData] = useState(expenseData)

  const submitHandler = newExpenseData => {
    const updatedData = data.concat(newExpenseData)
    setData(updatedData)
  }

  return (
    <div>
      <NewExpense formSubmitHandler={submitHandler} />
      <Expenses items={data} />
    </div>
  )
}

export default App
