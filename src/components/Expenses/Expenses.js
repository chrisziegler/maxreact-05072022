import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'

const Expenses = ({ items }) => {
  const [year, setYear] = useState('2022')

  const filterChangeHandler = selectedYear => {
    setYear(selectedYear)
  }

  const getSelectedYear = item => {
    const date = new Date(item.date)
    return date.getFullYear().toString() === year
  }
  const filteredYear = items.filter(getSelectedYear)
  // gives us 'All Years' select option when year is undefined
  const filteredData = year ? filteredYear : items

  const noContent = {
    color: 'khaki',
    padding: '2rem',
    fontSize: '1.2rem',
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterChangeHandler} year={year} />
        {filteredData.length === 0 ? (
          <div style={noContent}>There are no expenses added for this year.</div>
        ) : (
          filteredData.map(item => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        )}
      </Card>
    </div>
  )
}

export default Expenses
