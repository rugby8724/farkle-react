import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Image, Button } from 'react-bootstrap'

import GameBoard from '../components/GameBoard'
import { rollDice } from '../features/diceSlice'



const GameScreen = () => {
  const dispatch = useDispatch()

  return (
    <>
      <GameBoard />
      <Button variant="success" onClick={() => {dispatch(rollDice())}}>Roll</Button>
    </>

  )
}

export default GameScreen