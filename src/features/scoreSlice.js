import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  playerScore: 0,
  turnScore:0
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers:{
    adjustTurnScore: (state, action) =>{
      const {diceValue, fromSection} = action.payload
      const diceScore = (diceValue==1 ? 100 : 50)
      if(fromSection === 'rolled'){
        state.turnScore += diceScore
      }else{
        state.turnScore-= diceScore
      }
    },
    addTurnScore: (state)=>{
      if(state.turnScore > 0){
        state.playerScore += state.turnScore
        state.turnScore = 0
      }
     
    }
  }
})


export const {adjustTurnScore, addTurnScore} = scoreSlice.actions 

export default scoreSlice.reducer