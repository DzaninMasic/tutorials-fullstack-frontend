import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import categoriesReducer from './categories/categoriesSlice'

export default configureStore({
  reducer: {
      counter: counterReducer,
      categories: categoriesReducer
    },
})