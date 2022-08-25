import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    selectedCategory: null,
    selectedCategoryId: null
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
    setSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload
    },
  },
})

export const { setCategories, setSelectedCategory, setSelectedCategoryId } = categoriesSlice.actions

export default categoriesSlice.reducer