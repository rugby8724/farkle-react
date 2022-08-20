import {React, useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'


import { createUser, getImage } from '../features/userSlice'

const SignUpForm = () => {
  const dispatch = useDispatch()
  const {users, pendingImg} = useSelector((state) => state.user)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userExist, setUserExist] =useState(false)
  const [passwordError, setPasswordError] =useState(false)

  useEffect(() => {
    dispatch(getImage())
  },[])


  const handleSubmit = (e) =>{
    e.preventDefault()
    const account = users.find((player) => player.username == username)
    setUserExist(false)
    setPasswordError(false)
    if(account){
      setUserExist(true)
    }else if (password !== confirmPassword){
      setPasswordError(true)
    }else{
      dispatch(createUser({username, password, img:pendingImg}))
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
        <label>Confirm Password</label>
        <input 
          type='password' 
          name='ConfirmPassword' 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <img className='dog-image' src={pendingImg} alt='Dog'></img>
          <Button variant='danger' onClick={() => dispatch(getImage())}>New Dog</Button>
          <h6 style={{visibility: passwordError ? 'visible': 'hidden'}}>Passwords do not match</h6>
          <h6 style={{visibility: userExist ? 'visible': 'hidden'}}>User already exist please login</h6>
          <input type='submit' value='Submit'/>
          
      </form>
    </section>
  )
}

export default SignUpForm