import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ViewHOC from '../../HOC/view.hoc'
import LoginForm from './login.form'
import './login.style.sass'

const Login = ({ isLogged }) => isLogged ? <Redirect to='/'/> : <LoginForm />

const mapStateToProps = (state) => ({
  isLogged: state.auth.isAuthenticated
})

export default ViewHOC(connect(mapStateToProps)(Login))
