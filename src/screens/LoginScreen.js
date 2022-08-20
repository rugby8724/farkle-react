import {React} from 'react'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import LoginForm from '../components/LoginForm'


const LoginScreen = () => {
  const navigate = useNavigate()
  const {currentPlayer} = useSelector((state) => state.user)
  if(currentPlayer){navigate('/')}
  return (
    <>
    <LoginForm />
    </>
  )
}

export default LoginScreen