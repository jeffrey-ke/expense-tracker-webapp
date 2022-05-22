import React, { useState } from 'react'

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter'
import './ExpenseList.css'

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
                {filteredExpenses.length === 0 && <p> No Expenses</p>}
                {filteredExpenses.length > 0 && (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem 
                            key={expense.id}
                            title={expense.title} 
                            amount={expense.amount} 
                            date={expense.date} 
                        />
                    ))
                )}
            </Card>
        </div>)
}

export default ExpenseList