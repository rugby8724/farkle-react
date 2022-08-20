import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Button, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { userSignOut} from '../features/userSlice'

const NavAuth = () => {
  const dispatch = useDispatch()
  const {currentPlayer} = useSelector((state) => state.user)

  if(currentPlayer){
    return (
      <>
       <Navbar.Text className='nav-links'>
        Welcome {currentPlayer.username}
        </Navbar.Text>
        <Button size='sm' variant='outline-secondary' onClick={()=> dispatch(userSignOut())}>SignOut</Button>
      </>
    )
  }

  return(
    <LinkContainer to='/login'>
      <Nav.Link  className='nav-links' href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
    </LinkContainer>
  )

}

export default NavAuth