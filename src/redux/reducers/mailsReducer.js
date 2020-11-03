import { FETCH_MAILS } from '../types'

const mails_state = {
  loading: true,
  mails: []
}

export const mailsReducer = (state = mails_state, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_MAILS:
      return { loading: false, mails: payload }
    default:
      return state
  }
}
