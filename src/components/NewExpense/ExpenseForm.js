import React, {useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState(0.00)
    const [enteredDate, setEnteredDate] = useState(new Date(2003, 11, 11))

    const titleChangeHandler = (event) => setEnteredTitle(event.target.value)
    const amountChangeHandler = (event) => setEnteredAmount(event.target.value)
    const dateChangeHandler = (event) => setEnteredDate(event.target.value)

    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' onChange={amountChangeHandler} min='0.01' step='0.01' />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler} min='1970-01-01' max='2077-12-31' />
            </div>
        </div>
        <div className='new-expense__Actions'>
            <button type='submit'>Add Expense</button> 
        </div>
    </form>
}
export default ExpenseForm