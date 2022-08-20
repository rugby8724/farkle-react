import {React} from 'react'

import { Row, Col, } from 'react-bootstrap'
import { useSelector} from 'react-redux'

import Dice from './Dice'




const GameBoard = () => {
  const {rolledDice, selectedDice} = useSelector((state) => state.dice)

  const clickedDice = () =>{
   let dice =[]
    for(let setOfDice of selectedDice){
      setOfDice.forEach(element => {
        dice.push(element)
      });
    }
    return dice
  }

  let scoringDice = clickedDice()

  return (
    <>
    <div className='gameboard-container'>
      <Row>
        {rolledDice.map((dice, diceIndex) =>(
          <Col key={diceIndex} md={2}>
            <Dice diceValue={dice.diceValue} diceId={dice.diceId} fromSection='rolled' />
          </Col>
        ))}
      </Row>
      <Row>
       {scoringDice.map((dice)=>(
        <Col key={dice.diceId} md={2}>
        <Dice diceValue={dice.diceValue} diceId={dice.diceId} fromSection='scoring'/>
        </Col>
       ))}
      </Row>
    </div>
   

    </>
    
  )
}

export default GameBoard