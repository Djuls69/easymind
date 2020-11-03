import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Spinner } from 'react-bootstrap'
import { fetchNotes } from '../../redux/actions/notesAction'
import { connect } from 'react-redux'
import NotesItem from '../notes-item/NotesItem'

const Notes = ({ notesReducer, fetchNotes }) => {
  const { loading, notes } = notesReducer

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  return (
    <div>
      <h4 className='mb-4'>Liste des notes</h4>
      <Button
        as={Link}
        to='/create-note'
        variant='outline-primary'
        className='mb-4 bordered'
      >
        Créer une nouvelle note
      </Button>

      {loading ? (
        <Spinner
          style={{ display: 'block' }}
          animation='border'
          variant='info'
        />
      ) : notes.length === 0 ? (
        <h4 className='lead'>Pas de notes créés pour le moment</h4>
      ) : (
        notes.map(note => <NotesItem key={note.id} note={note} />)
      )}
    </div>
  )
}

const mapState = state => ({
  notesReducer: state.notesReducer
})

export default connect(mapState, { fetchNotes })(Notes)
