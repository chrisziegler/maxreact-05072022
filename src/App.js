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
  //     date: '2021-01-18',
  //   },
  // ]

  useEffect(() => {
    setData(expenseData)
  }, [])

  const [data, setData] = useState(expenseData)
  const [hasFilterYear, setHasFilterYear] = useState('')

  const submitHandler = newExpenseData => {
    const updatedData = data.concat(newExpenseData)
    setData(updatedData)
  }

  const setFilterYear = year => {
    setHasFilterYear(year)
  }

  const getSelectedYears = expense => {
    return expense.date.slice(0, 4) === hasFilterYear
  }
  const filteredYears = data.filter(getSelectedYears)
  const filteredData = hasFilterYear ? filteredYears : data

  return (
    <div>
      <NewExpense formSubmitHandler={submitHandler} />
      <Expenses items={filteredData} setFilterYear={setFilterYear} />
    </div>
  )
}

export default App
