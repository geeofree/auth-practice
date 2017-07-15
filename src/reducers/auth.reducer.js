import { TOGGLE_AUTH } from '../types/auth.types'
import assign from '../helpers/assign'

const initialState = {
  isAuthenticated: false,
  users: [{
    username: 'admin',
    password: 'strongpassword'
  }]
}

export default (state=initialState, action) => {
  const { payload } = action

  switch(action.type) {
    case TOGGLE_AUTH:
      return assign(state, {
        isAuthenticated: action.payload.logState
      })
    default:
      return state
  }
}
