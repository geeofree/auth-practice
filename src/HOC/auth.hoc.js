import React from 'react'
import { connect } from 'react-redux'
import { toggleAuth } from '../actions/auth.action'
import AuthPage from '../views/auth/auth.view'


export default (Component) => {
  const Authenticate = (props) => {
    const { isLogged, toggleAuth } = props
    return isLogged ? <Component {...props} /> : <AuthPage isLogged={isLogged} />
  }

  const mapStateToProps = (state) => ({
    isLogged: state.auth.isAuthenticated
  })

  return connect(mapStateToProps)(Authenticate)
}
