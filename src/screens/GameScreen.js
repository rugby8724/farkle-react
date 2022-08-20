import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Image, Button } from 'react-bootstrap'

import GameBoard from '../components/GameBoard'
import ScoreBoard from '../components/ScoreBoard'
import { rollDice, resetDice } from '../features/diceSlice'
import { addTurnScore } from '../features/scoreSlice'



const GameScreen = () => {
  const dispatch = useDispatch()



  return (
    <>
      <GameBoard />
      <Row>
        <Col>
        <Button onClick={() => dispatch(rollDice())} variant="success" >Roll</Button>
        </Col>
        <Col>
        <Button onClick={() => {dispatch(addTurnScore()); dispatch(resetDice())}} variant="danger" >Score It</Button>
        </Col>
      </Row>
      <div className='score-container'>
        <Row>
          <Col>
            <ScoreBoard />
          </Col>
        </Row>
    </div>
     
    </>

  )
}

export default GameScreen