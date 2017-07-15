import { createStore, combineReducers, applyMiddleware } from 'redux'
import AuthReducer from './reducers/auth.reducer'

const logger = (state) => (next) => (action) => {
  console.log('Dispatching', action)
  next(action)
}

const middleware = applyMiddleware(logger)

const reducers = combineReducers({ auth: AuthReducer })

export default createStore(reducers, middleware)
