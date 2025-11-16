import React from 'react'
import { ExpenseProvider } from '../context/ExpenseContext'
import DashboardLayout from '../layout/DashboardLayout'
import Dashboard from '../component/Dashboard'

const Index = () => {
  return (
    <ExpenseProvider>

      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>

    </ExpenseProvider>


  )
}

export default Index
