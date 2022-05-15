import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({ filteredData }) => {
  if (filteredData.length === 0) {
    return (
      <div className="expenses-list__fallback">
        There are no expenses added for this year.
      </div>
    )
  }
  return (
    <ul className="expenses-list">
      {filteredData.map(item => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  )
}

export default ExpensesList
