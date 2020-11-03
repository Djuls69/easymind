const { REGISTER_USER, LOGOUT_USER, LOGIN_USER } = require('../types')

const init_State = {
  user: null
}

const usersReducer = (state = init_State, action) => {
  const { type, payload } = action
  switch (type) {
    case REGISTER_USER:
    case LOGIN_USER:
      return { user: payload }
    case LOGOUT_USER:
      return { user: null }
    default:
      return state
  }
}

export default usersReducer
