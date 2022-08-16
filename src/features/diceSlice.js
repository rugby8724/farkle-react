import { createSlice } from "@reduxjs/toolkit";


const randomDiceNumber = () => {
  const sidedDice = 6
  return Math.ceil(Math.random() * sidedDice)
  
}



const initialState ={
  diceToRoll: 3,
  rolledDice: [],
  selectedDice: []
}

export const diceSlice = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    rollDice: (state) =>{
      state.rolledDice = []
      for(let i=state.diceToRoll; i>0; i--){
        state.rolledDice.push(randomDiceNumber())
        console.log(state.rolledDice)
      }
    },
    countDice: (state) =>{
      console.log(state.diceToRoll)
    }
  }
})

export const {rollDice, countDice} = diceSlice.actions

export default diceSlice.reducer