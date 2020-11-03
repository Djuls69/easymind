import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Spinner } from 'react-bootstrap'
import { fetchMails } from '../../redux/actions/mailActions'
import { connect } from 'react-redux'
import MailItem from '../mailItem/MailItem'

const Mails = ({ fetchMails, mailsReducer }) => {
  const { loading, mails } = mailsReducer

  useEffect(() => {
    fetchMails()
  }, [fetchMails])

  return (
    <div>
      <h4 className='mb-4'>Liste des courriers / emails</h4>
      <Button
        as={Link}
        to='/create-mail'
        variant='outline-primary'
        className='mb-4 bordered'
      >
        Créer un nouveau courrier
      </Button>

      {loading ? (
        <Spinner
          style={{ display: 'block' }}
          animation='border'
          variant='info'
        />
      ) : mails.length === 0 ? (
        <h4 className='lead'>Pas de courriers ...</h4>
      ) : (
        mails.map(mail => <MailItem key={mail.id} mail={mail} />)
      )}
    </div>
  )
}

const mapState = state => ({
  mailsReducer: state.mailsReducer
})

export default connect(mapState, { fetchMails })(Mails)
