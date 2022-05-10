import React from 'react'
import './NewExpense.css'

const NewExpense = () => {
  return <div>NewExpense</div>
}

export default NewExpense

function f1() {
  return this
}

// In a browser:
f1() === window // true
// 'strict mode'; // undefined

// In Node:
f1() === globalThis // true
// 'strict mode'; // undefined
function f2() {
  // see strict mode
  return this
}

f2() === undefined // true
