import React, { useState, useEffect } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { expenseData } from './expense_data'
const App = () => {
  // const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //   },
  //   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ]

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
