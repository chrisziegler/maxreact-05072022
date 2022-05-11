import React from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'

const Expenses = ({ setFilterYear, items }) => {
  const onSetYear = year => {
    setFilterYear(year)
  }
  return (
    <div>
      <ExpenseFilter onSetYear={onSetYear} />
      <Card className="expenses">
        {items.map(item => (
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
