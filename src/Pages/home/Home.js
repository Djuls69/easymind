import React from 'react'
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
          <h4>Merci de vous connecter</h4>
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
