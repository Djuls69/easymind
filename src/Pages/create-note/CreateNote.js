import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import { createNotesAction } from '../../redux/actions/notesAction'
import { connect } from 'react-redux'

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Le titre est requis'
  }

  if (!values.body) {
    errors.body = 'Description requise'
  }
  return errors
}

const CreateNote = ({ history, createNotesAction }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      body: ''
    },
    validate,
    onSubmit: values => {
      createNotesAction(values, history)
    }
  })

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors
  } = formik

  return (
    <section>
      <div className='form-container'>
        <h2 style={{ marginBottom: 40 }}>Nouvelle Note</h2>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Titre</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Entrez le titre de cette note'
            />
            {touched.title && errors.title && (
              <Form.Text className='text-muted'>{errors.title}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              name='body'
              value={values.body}
              onChange={handleChange}
              placeholder='Entrez la descripion de cette note'
            />
            {touched.body && errors.body && (
              <Form.Text className='text-muted'>{errors.body}</Form.Text>
            )}
          </Form.Group>

          <Button style={{ marginRight: 20 }} variant='primary' type='submit'>
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
      </div>
    </section>
  )
}

export default connect(null, { createNotesAction })(CreateNote)
