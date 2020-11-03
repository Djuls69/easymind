import { v4 as uuidv4 } from 'uuid'
import { db } from '../../firebase/firebase'
import { FETCH_MAILS } from '../types'

export const fetchMails = () => async (dispatch, getState) => {
  const {
    usersReducer: { user }
  } = getState()
  const mails = []
  try {
    const res = await db.collection('mails').where('user', '==', user.id).get()
    res.forEach(doc => mails.push(doc.data()))
    dispatch({
      type: FETCH_MAILS,
      payload: mails
    })
  } catch (err) {
    console.log(err.message)
  }
}

export const createMailAction = (values, history) => async (
  dispatch,
  getState
) => {
  const id = uuidv4()
  const { title, subject, body } = values
  const {
    usersReducer: { user }
  } = getState()

  try {
    await db.collection('mails').doc(id).set({
      id,
      user: user.id,
      title,
      subject,
      body,
      isSended: false
    })
    history.push('/')
  } catch (err) {
    console.log(err.message)
  }
}

export const sendMail = id => async dispatch => {
  try {
    await db.collection('mails').doc(id).update({
      isSended: true,
      sendedDate: Date.now()
    })
    dispatch(fetchMails())
  } catch (err) {
    console.log(err.message)
  }
}

export const deleteMail = id => async dispatch => {
  try {
    await db.collection('mails').doc(id).delete()
    dispatch(fetchMails())
  } catch (err) {
    console.log(err.message)
  }
}
