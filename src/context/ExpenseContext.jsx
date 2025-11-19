import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'

const ExpenseContext = createContext();

const expenseReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return { ...state, expenses: [...state.expenses, action.payload] };

        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id != action.payload.id
                ),
            };

        case "UPDATE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.map((expense) =>
                    expense.id === action.payload.id ? action.payload : expense)
            }

        case "SET_EXPENSES":
            return { ...state, expenses: action.payload };

        case "SET_LOADING":
            return {
                ...state, loading: action.payload
            };

        case "SET_ERROR":
            return { ...state, error: action.payload }

        default:
            return state
    }


}
const initialState = {
    expenses:  JSON.parse(localStorage.getItem("expenses")) || [],
    loading: false,
    error: null
}

export const ExpenseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(expenseReducer, initialState);
    useEffect(() => {
        try {
            localStorage.setItem("expenses", JSON.stringify(state.expenses));

        }
        catch (error) {
            console.error("Failed to save expenses to local storage ", error);
            dispatch({ type: "SET_ERROR", payload: error })
        }
    }, [state.expenses])


    const [mode,setmode]=useState("bg-black")
    const [textColor,setTextColor]=useState("text-white")

    return <ExpenseContext.Provider value={{
        ...state,
        addExpense: (expense) => {
            const newExpense={
                ...expense,
                id:crypto.randomUUID(),
            }
          dispatch({type:"ADD_EXPENSE",payload:newExpense});
        },

        deleteExpense:(id)=>{
          dispatch({type:"DELETE_EXPENSE",payload:{id}})
        } ,
         updateExpense:(expense)=>{
          dispatch({type:"UPDATE_EXPENSE",payload:expense})
        } ,

        handleMode:()=>{
           if(mode =="bg-black"){
            setmode("bg-white")
             setTextColor("text-white")
           
           } 
           else{
            setmode("bg-black")
           
             setTextColor("text-black")
           }
        },
        mode

    }}
    >
        {children}</ExpenseContext.Provider>
}

export const useExpense=()=>{
    const context=useContext(ExpenseContext);
    if(context === undefined){
        throw new Error("useExpense must be used within ExepenseProvider ")
    }
    return context;
}