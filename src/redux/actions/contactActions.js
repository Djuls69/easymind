import { v4 as uuidv4 } from 'uuid'
import { db } from '../../firebase/firebase'
import { FETCH_CONTACTS, FETCH_ONE_CONTACT, CLEAR_CONTACT } from '../types'

export const fetchContacts = () => async (dispatch, getState) => {
  const {
    usersReducer: { user }
  } = getState()
  const contacts = []

  try {
    const res = await db
      .collection('contacts')
      .where('user', '==', user.id)
      .get()
    res.forEach(doc => contacts.push(doc.data()))
    dispatch({
      type: FETCH_CONTACTS,
      payload: contacts
    })
    dispatch({
      type: CLEAR_CONTACT
    })
  } catch (err) {
    console.log(err.message)
  }
}

export const fetchOneContact = id => async dispatch => {
  try {
    const res = await db.collection('contacts').where('id', '==', id).get()
    res.forEach(doc =>
      dispatch({
        type: FETCH_ONE_CONTACT,
        payload: doc.data()
      })
    )
  } catch (err) {
    console.log(err.message)
  }
}

export const createContact = (values, history) => async (
  dispatch,
  getState
) => {
  const { name, telephone, email, description } = values
  const {
    usersReducer: { user }
  } = getState()

  try {
    await db.collection('contacts').add({
      id: uuidv4(),
      user: user.id,
      name,
      telephone,
      email,
      description
    })
    history.push('/')
  } catch (err) {
    console.log(err.message)
  }
}

export const updateContact = (id, values) => async dispatch => {
  const { name, telephone, email, description } = values

  try {
    const res = await db.collection('contacts').where('id', '==', id).get()
    res.forEach(async doc => {
      await db
        .collection('contacts')
        .doc(doc.id)
        .update({
          name: name ? name : doc.data().name,
          telephone: telephone ? telephone : doc.data().telephone,
          email: email ? email : doc.data().email,
          description: description ? description : doc.data().description
        })
    })
  } catch (err) {
    console.log(err.message)
  }
}

export const deleteContact = id => async (dispatch, getState) => {
  try {
    const res = await db.collection('contacts').where('id', '==', id).get()
    res.forEach(async doc => {
      await db.collection('contacts').doc(doc.id).delete()
    })
    dispatch(fetchContacts())
  } catch (err) {
    console.log(err.message)
  }
}
