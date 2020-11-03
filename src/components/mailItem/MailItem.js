import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Moment from 'react-moment'
import { sendMail, deleteMail } from '../../redux/actions/mailActions'
import { connect } from 'react-redux'

const MailItem = ({ mail, sendMail, deleteMail }) => {
  const { id, title, subject, body, isSended, sendedDate } = mail

  return (
    <Card style={{ marginBottom: 20 }}>
      <Card.Body>
        <Card.Title style={{ color: isSended && '#4bbf73' }}>
          {isSended && <i className='fas fa-check'></i>} {title}
        </Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          Sujet: {subject}
        </Card.Subtitle>
        {isSended && (
          <Card.Subtitle className='mb-2 text-muted'>
            Envoyé le: {<Moment format='DD/MM/YYYY'>{sendedDate}</Moment>}
          </Card.Subtitle>
        )}
        <Card.Text className='mb-2'>{body}</Card.Text>
        {!isSended && (
          <Button
            onClick={() => sendMail(id)}
            variant='success'
            className='mr-2'
          >
            <i className='fas fa-check'></i> Envoyé ?
          </Button>
        )}
        <Button onClick={() => deleteMail(id)} variant='danger'>
          Supprimer
        </Button>
      </Card.Body>
    </Card>
  )
}

export default connect(null, { sendMail, deleteMail })(MailItem)
