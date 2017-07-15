import { TOGGLE_AUTH } from '../types/auth.types'
import assign from '../helpers/assign'

const initialState = {
  isAuthenticated: false
}

export default (state=initialState, action) => {
  const { payload } = action

  switch(action.type) {
    case TOGGLE_AUTH:
      return assign(state, payload.logState)
    default:
      return state
  }
}
