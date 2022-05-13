import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { expenseData } from './expense_data'
const App = () => {
  // no need to prevent http request - temp just using fs
  // useEffect(() => {
  //   setExpenses(expenseData)
  // }, [])

  const [expenses, setExpenses] = useState(expenseData)

  const addExpense = expense => {
    setExpenses(prevExpense => [expense, ...prevExpense])
  }

  return (
    <div>
      <NewExpense formSubmitHandler={addExpense} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
