import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import { createMailAction } from '../../redux/actions/mailActions'
import { connect } from 'react-redux'

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Le titre est requis'
  }

  if (!values.subject) {
    errors.subject = 'Le sujet est requis'
  }

  if (!values.body) {
    errors.body = 'Description requise'
  }
  return errors
}

const CreateMail = ({ history, createMailAction }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      subject: '',
      body: ''
    },
    validate,
    onSubmit: values => {
      createMailAction(values, history)
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
        <h2 style={{ marginBottom: 40 }}>Nouveau Courrier / email</h2>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Titre</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Entrez le titre du courrier'
            />
            {touched.title && errors.title && (
              <Form.Text className='text-muted'>{errors.title}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Sujet</Form.Label>
            <Form.Control
              type='text'
              name='subject'
              value={values.subject}
              onChange={handleChange}
              placeholder='Entrez le sujet du courrier'
            />
            {touched.subject && errors.subject && (
              <Form.Text className='text-muted'>{errors.subject}</Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              name='body'
              value={values.body}
              onChange={handleChange}
              placeholder='Entrez la descripion du courrier'
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

export default connect(null, { createMailAction })(CreateMail)
