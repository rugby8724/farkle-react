import {React} from 'react'

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

import {ReactComponent as FarkleLogo} from '../assets/Farkle-svg.svg'
import NavAuth from './NavAuth'

const NavBar = () => {
  return (
    <header>
      <Navbar className='navbar' bg="dark" variant='light' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer className='logo-container' to='/'>
            <Navbar.Brand>Farkle</Navbar.Brand>      
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavAuth />
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar