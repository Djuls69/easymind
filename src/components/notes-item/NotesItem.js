import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { deleteNote } from '../../redux/actions/notesAction'
import { connect } from 'react-redux'

const NotesItem = ({ note, deleteNote }) => {
  const { id, title, body } = note

  return (
    <Card style={{ marginBottom: 20 }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button onClick={() => deleteNote(id)} variant='danger'>
          Supprimer
        </Button>
      </Card.Body>
    </Card>
  )
}

export default connect(null, { deleteNote })(NotesItem)
