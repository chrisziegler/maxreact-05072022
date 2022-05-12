import React from 'react'

import './ExpenseFilter.css'

const ExpensesFilter = ({ onChangeFilter, year }) => {
  const handleChange = e => {
    onChangeFilter(e.target.value)
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="select-year">Filter by year</label>
        <select id="select-year" value={year} onChange={handleChange}>
          <option value="">All Years</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
