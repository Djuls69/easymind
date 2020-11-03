import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Spinner } from 'react-bootstrap'
import { fetchContacts } from '../../redux/actions/contactActions'
import { connect } from 'react-redux'
import ContactsItem from '../contactsItem/ContactsItem'

const Contacts = ({ contactsReducer, fetchContacts }) => {
  const { loading, contacts } = contactsReducer

  useEffect(() => {
    fetchContacts()
  }, [fetchContacts])

  return (
    <div>
      <h4 className='mb-4'>Liste des contacts importants</h4>
      <Button
        as={Link}
        to='/create-contact'
        variant='outline-primary'
        className='mb-4 bordered'
      >
        Créer un nouveau contact
      </Button>

      {loading ? (
        <Spinner
          style={{ display: 'block' }}
          animation='border'
          variant='info'
        />
      ) : contacts.length === 0 ? (
        <h4 className='lead'>Pas de contacts pour le moment</h4>
      ) : (
        contacts.map(contact => (
          <ContactsItem key={contact.id} contact={contact} />
        ))
      )}
    </div>
  )
}

const mapState = state => ({
  contactsReducer: state.contactsReducer
})

export default connect(mapState, { fetchContacts })(Contacts)
