import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const Mails = () => {
  return (
    <div>
      <h4 className='mb-4'>Courriers importants à faire</h4>
      <Button
        as={Link}
        to='/create-mail'
        variant='outline-primary'
        className='mb-4 bordered'
      >
        Créer un nouveau courrier
      </Button>

      <h1>Work in progress ...</h1>
    </div>
  )
}

export default connect(null, {})(Mails)
