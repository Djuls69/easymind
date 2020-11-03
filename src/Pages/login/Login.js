import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import { loginUser } from '../../redux/actions/usersActions'
import { connect } from 'react-redux'

const validate = values => {
  const errors = {}

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

  return errors
}

const Login = ({ history, loginUser }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      loginUser(values, history)
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
        <h2 style={{ marginBottom: 40 }}>Se connecter</h2>
        <Form noValidate onSubmit={handleSubmit}>
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

          <Button variant='primary' type='submit'>
            Envoyer
          </Button>
        </Form>
        <p className='mt-4'>
          Pas de compte ?{' '}
          <Link to='/register' style={{ color: '#1f9bcf' }}>
            En créer un
          </Link>
        </p>
      </div>
    </section>
  )
}

export default connect(null, { loginUser })(Login)
