import React, { useState } from 'react'
import { useExpense } from '../context/ExpenseContext'
import { getChartData, getExpensesByCategory, getExpensesByMonth } from '../utils/expenses';
import { BiBarChart, BiPieChart } from 'react-icons/bi';
import ExpensePieChart from './ExpensePieChart';
import ExpenseBarChart from './ExpenseBarChart';
const ExepenseChart = () => {
    const { expenses } = useExpense();
    const [chartype, setChartType] = useState("pie")
    const chartData = getChartData(expenses);
    const monthlyData = getExpensesByMonth(expenses)

    if (expenses.length === 0) {
        return (
            <div className='bg-white rounded-lg shadow-md p-6 ' >

                <p className='text-gray-500 text-center'>Add some expenses to see your spending anlytics </p>
            </div>)
    }
    return (
       
           <div className='bg-white rounded-lg shadow-md p-6 '>
                <h2 className='text-center text-2xl font-semibold text-expense-dark mb-4'>Expense Analyst</h2>
                  <div className='flex justify-center gap-7'>
                     <div className='flex justify-center mb-6 space-x-4'>
                <button onClick={() => setChartType("pie")} className={`flex items-center px-4 py-2 rounded-md transition-all ${chartype === 'pie' ? "bg-expense text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-200"} cursor-pointer`}>
                    <BiPieChart size={20} className='mr-2' />
                    <span>Pie Chart</span>
                </button>
            </div>


            <div className='flex justify-center mb-6 space-x-4'>
                <button onClick={() => setChartType("bar")} className={`flex items-center px-4 py-2 rounded-md transition-all ${chartype === 'bar' ? "bg-expense text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-200"} cursor-pointer`}>
                    <BiBarChart size={20} className='mr-2' />
                    <span>Bar Chart</span>
                </button>
            </div>
                  </div>

            <div>{chartype === "pie" ? <ExpensePieChart data={chartData} /> : <ExpenseBarChart data={monthlyData} />}</div>

        </div>
    )
}

export default ExepenseChart
