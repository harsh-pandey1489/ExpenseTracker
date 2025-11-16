import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExepenseChart from './ExepenseChart'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

const Dashboard = () => {
  return (
    <div className='space-y-8'>
      {/* expense summary  */}
      <ExpenseSummary />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2'>
          {/* expense chart  */}
          <ExepenseChart/>

        </div>
        <div>
          {/* expense form  */}
          <ExpenseForm/>
        </div>
        <ExpenseList/>
      </div>

    </div>
  )
}

export default Dashboard
