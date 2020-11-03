import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import Contacts from '../../components/contacts/Contacts'
import Mails from '../../components/mails/Mails'
import Navbar from '../../components/navbar/Navbar'
import Notes from '../../components/notes/Notes'

const Home = ({ user, category }) => {
  if (!user) {
    return (
      <section>
        <Container>
          <div className='landing-content'>
            <h1>EasyMind</h1>
            <p className='lead'>
              EasyMind est une application simple, qui va vous permettre
              d'enregistrer des données importantes, tels que des contacts, des
              courriers, ou des penses-bêtes, pour vous aider au mieux à
              réaliser vos démarches.
            </p>
            <hr />
            <p className='lead'>
              Pour commencer, merci de bien vouloir vous
              <br />
              <Link style={{ color: '#1f9bcf' }} to='/login'>
                connecter
              </Link>{' '}
              ou vous{' '}
              <Link style={{ color: '#1f9bcf' }} to='/register'>
                inscrire
              </Link>
            </p>
          </div>
        </Container>
      </section>
    )
  }

  const swapContent = () => {
    switch (category) {
      case 'contacts':
        return <Contacts />
      case 'mails':
        return <Mails />
      case 'notes':
        return <Notes />
      default:
        return <Contacts />
    }
  }

  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} sm={3}>
            <Navbar />
          </Col>

          <Col xs={12} sm={9}>
            {swapContent()}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const mapState = state => ({
  user: state.usersReducer.user,
  category: state.categoriesReducer.category
})

export default connect(mapState)(Home)
