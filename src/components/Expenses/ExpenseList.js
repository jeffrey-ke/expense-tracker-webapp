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
                {props.expenses.map((expense) => (
                    <ExpenseItem 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                    />
                ))}
            </Card>
        </div>)
}

export default ExpenseList