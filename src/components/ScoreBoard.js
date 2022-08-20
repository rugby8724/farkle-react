import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

const ScoreBoard = () => {
  const {playerScore, turnScore} = useSelector((state) => state.score)
  const {playerTurns} = useSelector(state=> state.dice)
  const {currentPlayer} = useSelector(state=> state.user)
  return (
    <>
      <Row>
        <Col md={3}>
        <h6>Turns Remains: {playerTurns}</h6>
        <h4>ScoreBoard</h4>
        <h6>Player Score: {playerScore}</h6>
        <h6>Turn Score: {turnScore}</h6>
        <h6>Potential Score: {playerScore + turnScore}</h6>
        </Col>
        <Col>
          <h4>Player: {currentPlayer.username}</h4>
          <img className='dog-img' src={currentPlayer.img} alt='Dogs Rule'></img>
        </Col>

      </Row>
      
    </>
  )
}

export default ScoreBoard