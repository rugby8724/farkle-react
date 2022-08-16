import React from 'react'

import { Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import Dice from './Dice'





const GameBoard = () => {
  const dispatch = useDispatch()
  const {rolledDice, diceToRoll} = useSelector((state) => state.dice)

  return (
    <>
    <div className='gameboard-container'>
      <Row>
        {rolledDice.map((dice, diceIndex) =>(
          <Col key={diceIndex} md={2}>
            <p><Dice dice={dice} /></p>
          </Col>
        ))}

      </Row>
      
      {/* <div>Hello</div> */}

    </div>

    </>
    
  )
}

export default GameBoard