import { TOGGLE_AUTH } from '../types/auth.types'

export const toggleAuth = (logState) => ({
  type: TOGGLE_AUTH,
  payload: { logState }
})
