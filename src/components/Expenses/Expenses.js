import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'

const Expenses = ({ items }) => {
  const [filterYear, setFilterYear] = useState('')

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear)
  }

  const getSelectedYears = items => {
    // return items.date.slice(0, 4) === filterYear
    const date = new Date(items.date)
    return date.getFullYear().toString() === filterYear
  }
  const filteredYears = items.filter(getSelectedYears)
  const filteredData = filterYear ? filteredYears : items

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChangeHandler} year={filterYear} />
        {filteredData.map(item => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
