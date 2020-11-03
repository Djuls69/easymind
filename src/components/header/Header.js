import React, { Fragment } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { logoutUser } from '../../redux/actions/usersActions'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import './Header.css'

const Header = ({ user, logoutUser, history }) => {
  return (
    <Navbar
      style={{ overflow: 'hidden', width: '100vw' }}
      bg='primary'
      variant='dark'
    >
      <Container>
        <Navbar.Brand as={Link} to='/'>
          EasyMind
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {user ? (
              <NavDropdown
                title={`Bonjour ${user.name}`}
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item onClick={() => logoutUser(history)}>
                  Se déconnecter
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Fragment>
                <Link className='navbar-link' to='/login'>
                  Se connecter
                </Link>
                <Link className='navbar-link' to='/register'>
                  S'enregistrer
                </Link>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const mapState = state => ({
  user: state.usersReducer.user
})

export default withRouter(connect(mapState, { logoutUser })(Header))
