import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {
    const [addNewButtonClicked, setButtonClicked] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setButtonClicked(false)
    }

    return (
        <div className='new-expense'>
            {!addNewButtonClicked && <button onClick={() => setButtonClicked(true)}>Add New Expense</button>}
            {addNewButtonClicked && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClicked={setButtonClicked}/>}
        </div>)
}

export default NewExpense