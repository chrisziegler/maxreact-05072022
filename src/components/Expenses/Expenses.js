import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import './Expenses.css'

const Expenses = ({ allYears }) => {
  const [year, setYear] = useState('2022')

  const filterChangeHandler = selectedYear => {
    setYear(selectedYear)
  }

  const getSelectedYear = item => {
    const date = new Date(item.date)
    return date.getFullYear().toString() === year
  }
  const filteredYear = allYears.filter(getSelectedYear)
  const filteredData = year ? filteredYear : allYears

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChangeHandler} year={year} />
        <ExpensesList filteredData={filteredData} />
      </Card>
    </div>
  )
}

export default Expenses
