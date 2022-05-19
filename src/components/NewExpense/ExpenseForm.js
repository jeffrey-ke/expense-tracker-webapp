import React, {useState} from 'react'
import ExpenseDate from '../Expenses/ExpenseDate'
import './ExpenseForm.css'
const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState(0.00)
    // const [enteredDate, setEnteredDate] = useState(new Date(2003, 11, 11))
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => setUserInput({...userInput, enteredTitle: event.target.value}) //'...userInput' is the spread operator and extracts all the key values pairs and inserts them
    const amountChangeHandler = (event) => setUserInput({...userInput, enteredAmount: event.target.value})
    const dateChangeHandler = (event) => setUserInput({...userInput, enteredDate: event.target.value})

    const submitHandler = (event) => {
        event.preventDefault() //prevents the webpage default behavior of reloading the page on button click within a form
        const ExpenseData = {...userInput, enteredDate: new Date(userInput.enteredDate)}
        console.log(ExpenseData)
    }

    return <form onSubmit={submitHandler}>
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