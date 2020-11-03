import { v4 as uuidv4 } from 'uuid'
import { db } from '../../firebase/firebase'
import { FETCH_NOTES } from '../types'

export const fetchNotes = () => async (dispatch, getState) => {
  const {
    usersReducer: { user }
  } = getState()
  const notes = []

  try {
    const res = await db.collection('notes').where('user', '==', user.id).get()
    res.forEach(doc => notes.push(doc.data()))
    dispatch({
      type: FETCH_NOTES,
      payload: notes
    })
  } catch (err) {
    console.log(err.message)
  }
}

export const createNotesAction = (values, history) => async (
  dispatch,
  getState
) => {
  const id = uuidv4()
  const { title, body } = values
  const {
    usersReducer: { user }
  } = getState()

  try {
    await db.collection('notes').doc(id).set({
      id,
      user: user.id,
      title,
      body
    })
    history.push('/')
  } catch (err) {
    console.log(err.message)
  }
}

export const deleteNote = id => async dispatch => {
  try {
    await db.collection('notes').doc(id).delete()
    dispatch(fetchNotes())
  } catch (err) {
    console.log(err.message)
  }
}
