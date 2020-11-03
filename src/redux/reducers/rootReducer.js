import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import usersReducer from './usersReducer'
import categoriesReducer from './categoriesReducer'
import { contactsReducer, contactReducer } from './contactsReducer'

const rootReducer = combineReducers({
  usersReducer,
  categoriesReducer,
  contactsReducer,
  contactReducer,
  form: formReducer
})

export default rootReducer
