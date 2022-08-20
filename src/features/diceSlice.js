import { createSlice, nanoid } from "@reduxjs/toolkit";


const randomDiceNumber = () => {
  const sidedDice = 6
  return Math.ceil(Math.random() * sidedDice)
  
}



const initialState ={
  playerTurns:5,
  diceToRoll:6,
  rolledDice:[],
  selectedDice:[],
  farkle: false
}

export const diceSlice = createSlice({
  name: 'dice',
  initialState,
  reducers: {
    rollDice: (state) =>{
      state.farkle = false
      if(state.diceToRoll<1){
        state.diceToRoll = 6
        state.selectedDice = []
      }
      state.rolledDice = []
      state.selectedDice.push([])
      const checkFarkle = () =>{
        console.log(state.rolledDice.findIndex((dice) => 1 == dice.diceValue))
        if(
          state.rolledDice.findIndex((dice) => 1 == dice.diceValue) == -1 &&
          state.rolledDice.findIndex((dice) => 5 == dice.diceValue) == -1 ){
            state.rolledDice = []
            state.selectedDice = []
            state.playerTurns--
            state.diceToRoll = 0
            state.farkle = true
            const farkle = 'FARKLE'
            let farkleNum = 0
            for(let letter of farkle){
              state.rolledDice.push({diceValue:farkle[letter], diceId:farkleNum})
              farkleNum++
            }
          }
      }
      for(let i=state.diceToRoll; i>=0; i--){
        if(i==0){
          checkFarkle()
        }else{
          state.rolledDice.push({diceValue:randomDiceNumber(), diceId: nanoid()})
        }
        
      }    
    },
    selectDice: (state, action) =>{
      const {diceId, diceValue} = action.payload
      const currentSelectedDice = state.selectedDice[state.selectedDice.length-1]
      const diceRolledIndex = state.rolledDice.findIndex((dice) => diceId === dice.diceId)
      const diceSelectedIndex = currentSelectedDice.findIndex((dice) => diceId === dice.diceId)
      if(diceRolledIndex>=0 && (diceValue == 1 || diceValue == 5)){
        currentSelectedDice.push(state.rolledDice[diceRolledIndex])
        state.rolledDice.splice(diceRolledIndex, 1)
        state.diceToRoll-=1
      }
      else if(diceSelectedIndex >=0){
       state.rolledDice.push(currentSelectedDice[diceSelectedIndex])
       currentSelectedDice.splice(diceSelectedIndex, 1)
       state.diceToRoll+=1
      }
    },
    resetDice: (state) =>{
      state.playerTurns--
      state.selectedDice.push([])
      state.diceToRoll = 0
    } 
  }
})

export const {rollDice, selectDice, resetDice} = diceSlice.actions

export default diceSlice.reducer