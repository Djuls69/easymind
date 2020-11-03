import {
  FETCH_CONTACTS,
  CLEAR_CONTACTS,
  FETCH_ONE_CONTACT,
  CLEAR_CONTACT
} from '../types'

const init_state = {
  loading: true,
  contacts: []
}

export const contactsReducer = (state = init_state, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_CONTACTS:
      return { loading: false, contacts: payload }
    case CLEAR_CONTACTS:
      return { loading: true, contacts: [] }
    default:
      return state
  }
}

const contact_state = {
  loading: true,
  contact: {}
}

export const contactReducer = (state = contact_state, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_ONE_CONTACT:
      return { loading: false, contact: payload }
    case CLEAR_CONTACT:
      return { loading: true, contact: {} }
    default:
      return state
  }
}
