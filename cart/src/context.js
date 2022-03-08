import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

// initial state setup
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  
  
  // using usereducer hook
  const [state, dispatch] = useReducer(reducer, initialState)

  // clear the whole cart 
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  // removing items
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
  // increasing number of items
  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id })
  }

  // decereasing number of items
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id })
  }

  // fetching data on reload
  const fetchData = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }
  
  useEffect(() => {
    // fetching data from api
    fetchData()
  }, [])

  useEffect(() => {
    // calculating all number of products 
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
