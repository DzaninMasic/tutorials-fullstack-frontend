import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    numberOfCategories: 0,
    selectedCategory: null,
    selectedCategoryId: null
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setNumberOfCategories: (state, action) => {
      state.numberOfCategories = action.payload
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
    setSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload
    },
  },
})

export const { setCategories, setSelectedCategory, setSelectedCategoryId, setNumberOfCategories } = categoriesSlice.actions

export default categoriesSlice.reducer