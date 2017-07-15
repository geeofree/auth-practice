import React from 'react'
import { connect } from 'react-redux'
import { toggleAuth } from '../../actions/auth.action'

class LoginForm extends React.Component {

  render() {
    const { toggleAuth } = this.props
    return (
      <div className="login view">
        <button onClick={() => toggleAuth(true)}>Log in</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleAuth: (logState) => dispatch(toggleAuth(logState))
})


export default connect(null, mapDispatchToProps)(LoginForm)
