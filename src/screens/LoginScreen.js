import {React} from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'


const LoginScreen = () => {
  const navigate = useNavigate()
  const {currentPlayer} = useSelector((state) => state.user)
  if(currentPlayer){navigate('/')}
  return (
    <>
    <Row>
      <Col md={4}>
      <LoginForm />
      </Col>
      <Col md={4}>
      <SignUpForm />
      </Col>
    </Row>
    
    </>
  )
}

export default LoginScreen