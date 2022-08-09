import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './slices/charactersSlice'
import loginReducer from './slices/loginSlice'


export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    login: loginReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
