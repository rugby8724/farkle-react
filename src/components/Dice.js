import React from 'react'

import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { selectDice } from '../features/diceSlice'
import { adjustTurnScore } from '../features/scoreSlice'





const Dice = ({diceValue, diceId, fromSection}) => {
  const dispatch = useDispatch()

  return (
    <div>
      <Button 
      onClick={
        () =>{
          dispatch(selectDice({diceId, diceValue}));
          dispatch(adjustTurnScore({diceValue, fromSection}))
         }}>{diceValue}</Button>
    </div>
  )
}

export default Dice