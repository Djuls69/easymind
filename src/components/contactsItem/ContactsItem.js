import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { deleteContact } from '../../redux/actions/contactActions'
import { connect } from 'react-redux'

const ContactsItem = ({ contact, deleteContact }) => {
  const { id, name, telephone, email, description } = contact

  return (
    <Card style={{ marginBottom: 20 }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {email && (
          <Card.Text className='mb-2 text-muted'>
            <i className='far fa-envelope' /> Email: {email}
          </Card.Text>
        )}
        {telephone && (
          <Card.Text className='mb-2 text-muted'>
            <i className='fas fa-mobile-alt' /> Téléphone: {telephone}
          </Card.Text>
        )}
        {description && <Card.Text>{description}</Card.Text>}
        <Button
          as={Link}
          to={`/update-contact/${id}`}
          className='mr-4'
          variant='primary'
        >
          Modifier
        </Button>
        <Button onClick={() => deleteContact(id)} variant='danger'>
          Supprimer
        </Button>
      </Card.Body>
    </Card>
  )
}

export default connect(null, { deleteContact })(ContactsItem)
