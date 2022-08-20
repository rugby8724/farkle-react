import React from 'react'
import { useSelector } from 'react-redux'

const ScoreBoard = () => {
  const {playerScore, turnScore} = useSelector((state) => state.score)
  const {playerTurns} = useSelector(state=> state.dice)
  return (
    <>
      <h6>Turns Remains: {playerTurns}</h6>
      <h4>ScoreBoard</h4>
      <h6>Player Score: {playerScore}</h6>
      <h6>Turn Score: {turnScore}</h6>
      <h6>Potential Score: {playerScore + turnScore}</h6>
    </>
  )
}

export default ScoreBoard