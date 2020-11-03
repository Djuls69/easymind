import { auth } from '../../firebase/firebase'
import {
  LOGOUT_USER,
  REGISTER_USER,
  LOGIN_USER,
  CLEAR_CONTACTS,
  CLEAR_MAILS,
  CLEAR_NOTES
} from '../types'

export const registerUser = values => async dispatch => {
  const { name, email, password } = values
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    await user.updateProfile({
      displayName: name
    })
    dispatch({
      type: REGISTER_USER,
      payload: {
        id: user.uid,
        name: user.displayName,
        email: user.email
      }
    })
  } catch (err) {
    console.log(err.message)
  }
}

export const loginUser = (values, history) => async dispatch => {
  const { email, password } = values
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password)
    dispatch({
      type: LOGIN_USER,
      payload: {
        id: user.uid,
        name: user.displayName,
        email: user.email
      }
    })
    history.push('/')
  } catch (err) {
    console.log(err.message)
  }
}

export const logoutUser = history => async dispatch => {
  try {
    await auth.signOut()
    dispatch({ type: LOGOUT_USER })
    dispatch({ type: CLEAR_CONTACTS })
    dispatch({ type: CLEAR_MAILS })
    dispatch({ type: CLEAR_NOTES })
    localStorage.removeItem('persist:easymind')
    history.push('/login')
  } catch (err) {
    console.log(err.message)
  }
}
