import React, { useState } from 'react'

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter'
import './ExpenseList.css'

function ExpenseList(props) {
    const [selectedYear, setSelectedYear] = useState('2022')

    const selectYearHandler = (year) => setSelectedYear(year)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={selectedYear} 
                    onChangeFilter={selectYearHandler} 
                />
                {props.expenses.filter((expense) => (
                    String(expense.date).includes(selectedYear)
                )).map((expense) => (
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                />))}
            </Card>
        </div>)
}

export default ExpenseList