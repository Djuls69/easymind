import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

const Notes = () => {
  return (
    <div>
      <h4 className='mb-4'>Notes importantes</h4>
      <Button
        as={Link}
        to='/create-note'
        variant='outline-primary'
        className='mb-4 bordered'
      >
        Créer une nouvelle note
      </Button>

      <h1>Work in progress ...</h1>
    </div>
  )
}

export default connect(null, {})(Notes)
