import ExpenseItems from './ExpenseItems'

const Expenses = ({ expenses }) => {
  return (
    <div>
      {expenses.map(item => (
        <ExpenseItems
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  )
}

export default Expenses
