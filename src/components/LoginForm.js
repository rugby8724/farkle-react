import {React, useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { userSignIn } from '../features/userSlice'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {users} = useSelector((state) => state.user)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [wrongInfo, setWrongInfo] =useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    setWrongInfo(false)
    const account = users.find((player) => player.username == username)
    console.log(account)

    if(account && account.password === password){
      dispatch(userSignIn(account))
      navigate('/')
    }else{
      setWrongInfo(true)
    }
  }

  return (
    <section>
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          type='text' 
          name='Username' 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password</label>
        <input 
          type='password' 
          name='Password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <h6 style={{visibility: wrongInfo ? 'visible': 'hidden'}}>UserName or Password is incorrect</h6>
          <input type='submit' value='Submit'/>
          
      </form>
    </section>
  )
}

export default LoginForm