import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import categoriesReducer from './categoriesReducer'
import { contactsReducer, contactReducer } from './contactsReducer'
import { mailsReducer } from './mailsReducer'
import { notesReducer } from './notesReducer'

const rootReducer = combineReducers({
  usersReducer,
  categoriesReducer,
  contactsReducer,
  contactReducer,
  mailsReducer,
  notesReducer
})

export default rootReducer
