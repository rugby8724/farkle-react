import { configureStore } from "@reduxjs/toolkit";
import diceReducer from '../features/diceSlice'

export const store = configureStore({
  reducer:{
    dice: diceReducer
  }
})