import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

import {ReactComponent as FarkleLogo} from '../assets/Farkle-svg.svg'

const HomeScreen = () => {
  const {currentPlayer} = useSelector((state) => state.user)
  if(!currentPlayer){
    return(
      <>
    <Container>
    <FarkleLogo />
    <Link to='/login'>
      <Button variant="success">Login/Sign Up</Button>
    </Link>
    </Container>
      
    </>
    ) 
  }
  return (
    <>
    <Container>
    <FarkleLogo />
    <Link to='/challenge'>
      <Button variant="success">Single Player Challenge</Button>
    </Link>
    
    </Container>
      
    </>
  )
}

export default HomeScreen