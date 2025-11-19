import React from 'react'
import {Toaster} from "react-hot-toast"
import { useExpense } from '../context/ExpenseContext'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
const DashboardLayout = ({children}) => {
   const {handleMode,mode,textColor}=useExpense()
  return (
    <div className='min-h-screen bg-gray-50'>
      <Toaster position='top-right' toastOptions={{
        duration:3000,
        style:{
          background:"#363636",
          color:"#fff",
          borderRadius:"8px"
        },
        success:{
          iconTheme:{
            primary:"10b981",
            secondary:"#fff",
          }
          ,
        }
      }}/>
      <header className={`${mode} shadow-sm`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
            <div className='flex justify-center md:justify-between items-center'>
            <h1 className='text-3xl font-bold text-expense'>Budget wow tracker</h1>
  
            <p className='hidden md:block text-gray-500'>Track your expenses with ease</p>
            <button onClick={()=>handleMode()}  className={`ml-3 ${textColor} text-3xl `}> {mode==="bg-white"?<CiDark/> :<CiLight/>}</button>
            </div>
        </div>
        
      </header>

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>{children}</main>
      <footer className={`${mode} shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]`}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4' >
            <p className='text-center text-gray-500 text-sm'>Budget Wow Tracker &copy;{new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

export default DashboardLayout
