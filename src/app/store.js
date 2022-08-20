import { configureStore } from "@reduxjs/toolkit";
import diceReducer from '../features/diceSlice'
import scoreReducer from '../features/scoreSlice'
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer:{
    dice: diceReducer,
    score: scoreReducer,
    user: userReducer
  }
})