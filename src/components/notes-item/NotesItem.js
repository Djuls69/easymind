import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { deleteNote } from '../../redux/actions/notesActions'
import { connect } from 'react-redux'

const NotesItem = ({ note, deleteNote }) => {
  const { _id, title, content } = note

  return (
    <Card style={{ marginBottom: 20 }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button onClick={() => deleteNote(_id)} variant='danger'>
          Supprimer
        </Button>
      </Card.Body>
    </Card>
  )
}

export default connect(null, { deleteNote })(NotesItem)
