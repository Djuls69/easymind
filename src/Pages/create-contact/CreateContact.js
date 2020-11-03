import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import { createContact } from '../../redux/actions/contactActions'
import { connect } from 'react-redux'

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Le nom est requis'
  }
  return errors
}

const CreateContact = ({ history, createContact }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      telephone: '',
      email: '',
      description: ''
    },
    validate,
    onSubmit: values => {
      createContact(values, history)
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
        <h2 style={{ marginBottom: 40 }}>Nouveau Contact</h2>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicName'>
            <Form.Label>Nom *</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Entrez le nom du contact'
            />
            {touched.name && errors.name && (
              <Form.Text className='text-muted'>{errors.name}</Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Adresse email</Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              placeholder='Entrez son email'
            />
          </Form.Group>

          <Form.Group controlId='formBasicTelephone'>
            <Form.Label>Téléphone</Form.Label>
            <Form.Control
              type='text'
              name='telephone'
              value={values.telephone}
              onChange={handleChange}
              placeholder='Entrez son numéro de téléphone'
            />
          </Form.Group>

          <Form.Group controlId='formBasicDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              name='description'
              value={values.description}
              onChange={handleChange}
              placeholder='Description du contact'
            />
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

export default connect(null, { createContact })(CreateContact)
