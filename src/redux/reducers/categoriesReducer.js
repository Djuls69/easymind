const { SET_CATEGORY } = require('../types')

const categoriesReducer = (state = { category: 'contacts' }, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_CATEGORY:
      return { category: payload }
    default:
      return state
  }
}

export default categoriesReducer
