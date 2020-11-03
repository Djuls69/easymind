import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {
  fetchOneContact,
  updateContact
} from '../../redux/actions/contactActions'
import { connect } from 'react-redux'

const UpdateContact = ({
  history,
  match,
  fetchOneContact,
  updateContact,
  contactReducer
}) => {
  const { loading, contact } = contactReducer
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [description, setDescription] = useState('')
  const contactId = match.params.id

  useEffect(() => {
    fetchOneContact(contactId)
  }, [fetchOneContact, contactId])

  useEffect(() => {
    if (contact.name) {
      setName(contact.name)
    }
    if (contact.email) {
      setEmail(contact.email)
    }
    if (contact.telephone) {
      setTelephone(contact.telephone)
    }
    if (contact.description) {
      setDescription(contact.description)
    }
  }, [contact])

  const handleSubmit = async e => {
    e.preventDefault()
    await updateContact(contactId, { name, email, telephone, description })
    history.push('/')
  }

  return (
    <section>
      <div className='form-container'>
        <h2 style={{ marginBottom: 40 }}>Nouveau Contact</h2>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Entrez le nom du contact'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Adresse email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Entrez son email'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type='text'
                name='telephone'
                value={telephone}
                onChange={e => setTelephone(e.target.value)}
                placeholder='Entrez son numéro de téléphone'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                name='description'
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder='Description du contact'
              />
            </Form.Group>

            <Button
              style={{ marginRight: 20 }}
              variant='primary'
              type='submit'
              disabled={!name}
            >
              Envoyer
            </Button>
            <Button
              variant='secondary'
              type='button'
              onClick={() => history.goBack()}
            >
              Retour
            </Button>
          </Form>
        )}
      </div>
    </section>
  )
}

const mapState = state => ({
  contactReducer: state.contactReducer
})

export default connect(mapState, { fetchOneContact, updateContact })(
  UpdateContact
)
