import React from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {ReactComponent as FarkleLogo} from '../assets/Farkle-svg.svg'

const NavBar = () => {
  return (
    <header>
      <Navbar className='navbar' bg="dark" variant='light' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer className='logo-container' to='/'>
            <Navbar.Brand><FarkleLogo className='nav-logo'/></Navbar.Brand>      
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar