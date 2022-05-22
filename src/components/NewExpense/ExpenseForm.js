import React, {useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('')
    // const [enteredAmount, setEnteredAmount] = useState(0.00)
    // const [enteredDate, setEnteredDate] = useState(new Date(2003, 11, 11))
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        // setUserInput({...userInput, enteredTitle: event.target.value})
         //'...userInput' is the spread operator and extracts all the key values pairs and inserts them
         setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value} //this is better form for updating state that includes details from previous state
            //React ensures that I have teh right state to update.
         })
    }
    const amountChangeHandler = (event) => {
        setUserInput((prevState) => { 
            return {...prevState, enteredAmount: event.target.value}
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value}
        })
    }
    const submitHandler = (event) => {
        event.preventDefault() //prevents the webpage default behavior of reloading the page on button click within a form
        const expenseData = {...userInput, enteredDate: new Date(userInput.enteredDate)}
        props.onSaveExpenseData({
            title: expenseData.enteredTitle,
            amount: expenseData.enteredAmount,
            date: expenseData.enteredDate
        })
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
    }

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={userInput.enteredAmount} onChange={amountChangeHandler} min='0.01' step='0.01' />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={userInput.enteredDate} onChange={dateChangeHandler} min='1970-01-01' max='2077-12-31' />
            </div>
        </div>
        <div className='new-expense__Actions'>
            <button onClick={() => props.onCancelClicked(false)}>Cancel</button>
            <button type='submit'>Add Expense</button> 
        </div>
    </form>)
}
export default ExpenseForm