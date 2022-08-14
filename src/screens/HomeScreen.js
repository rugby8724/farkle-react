import React from 'react'

import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

import {ReactComponent as FarkleLogo} from '../assets/Farkle-svg.svg'

const HomeScreen = () => {
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