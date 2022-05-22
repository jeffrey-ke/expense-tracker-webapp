import React, { useState } from 'react'

import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import ExpensesList from './ExpensesList';

function ExpenseList(props) {
    const [selectedYear, setSelectedYear] = useState('2022')

    const selectYearHandler = (year) => setSelectedYear(year)

    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === selectedYear)
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={selectedYear} 
                    onChangeFilter={selectYearHandler} 
                />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>)
}

export default ExpenseList