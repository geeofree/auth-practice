import React from 'react'
import { connect } from 'react-redux'
import { toggleAuth } from '../../actions/auth.action'


const AuthPage = ({ isLogged, toggleAuth }) => (
  <div className="login view">
    <h1>You must be logged in in order to view this page.</h1>
    <button onClick={() => toggleAuth(!isLogged)}>
        Log in
    </button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  toggleAuth: logState => dispatch(toggleAuth(logState))
})

export default connect(null, mapDispatchToProps)(AuthPage)
