import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import { registerUser } from '../../redux/actions/usersActions'
import { connect } from 'react-redux'
import './Register.css'

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Le nom est requis'
  }

  if (!values.email) {
    errors.email = 'Votre email est requis'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Adresse email invalide'
  }

  if (!values.password) {
    errors.password = 'Un mot de passe est requis'
  } else if (values.password.length < 6) {
    errors.password = 'Au minimum 6 caractères'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Entrez le mot de passe à nouveau'
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Les mots de passe ne correspondent pas'
  }

  return errors
}

const Register = ({ registerUser }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validate,
    onSubmit: values => {
      registerUser(values)
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
        <h2 style={{ marginBottom: 40 }}>S'enregistrer</h2>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicName'>
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Entrez votre nom'
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
              onBlur={handleBlur}
              placeholder='Entrez votre email'
            />
            {touched.email && errors.email && (
              <Form.Text className='text-muted'>{errors.email}</Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Entrez votre mot de passe'
            />
            {touched.password && errors.password && (
              <Form.Text className='text-muted'>{errors.password}</Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId='formBasicPassword2'>
            <Form.Label>Répétez le mot de passe</Form.Label>
            <Form.Control
              type='password'
              name='confirmPassword'
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Veuillez répéter votre mot de passe'
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Form.Text className='text-muted'>
                {errors.confirmPassword}
              </Form.Text>
            )}
          </Form.Group>

          <Button variant='primary' type='submit'>
            Envoyer
          </Button>
        </Form>

        <p className='mt-4'>
          Déjà inscrit ?{' '}
          <Link to='/login' style={{ color: '#1f9bcf' }}>
            Se connecter
          </Link>
        </p>
      </div>
    </section>
  )
}

export default connect(null, { registerUser })(Register)
