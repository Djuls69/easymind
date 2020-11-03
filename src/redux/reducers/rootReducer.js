import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import categoriesReducer from './categoriesReducer'
import { contactsReducer, contactReducer } from './contactsReducer'
import { mailsReducer } from './mailsReducer'

const rootReducer = combineReducers({
  usersReducer,
  categoriesReducer,
  contactsReducer,
  contactReducer,
  mailsReducer
})

export default rootReducer
