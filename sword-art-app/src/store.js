import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './slices/charactersSlice'

export default configureStore({
  reducer: {
    characters: charactersReducer
  },
});