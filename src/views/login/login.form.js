import React from 'react'
import { connect } from 'react-redux'
import { toggleAuth } from '../../actions/auth.action'
import TextField from './form.textfield'


class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)

    this.state = {
      username: '',
      password: ''
    }
  }

  changeHandler({ target }) {
    this.setState({ [target.name]: target.value })
  }

  submitHandler(event) {
    event.preventDefault()
    console.log(event, this.state)
  }

  render() {
    const { submitHandler, changeHandler } = this
    const { toggleAuth } = this.props

    return (
      <div className="login view">
        <form onSubmit={submitHandler} className="sign-in">
          <TextField
            type="text"
            name="username"
            label="Username"
            placeholder="Enter username"
            changeHandler={changeHandler} />

          <TextField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter password"
            changeHandler={changeHandler} />

          <button>Log in</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleAuth: (logState) => dispatch(toggleAuth(logState))
})


export default connect(null, mapDispatchToProps)(LoginForm)
