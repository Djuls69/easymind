import { CLEAR_NOTES, FETCH_NOTES } from '../types'

const notes_state = {
  loading: true,
  notes: []
}

export const notesReducer = (state = notes_state, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_NOTES:
      return { loading: false, notes: payload }
    case CLEAR_NOTES:
      return { loading: true, notes: [] }
    default:
      return state
  }
}
