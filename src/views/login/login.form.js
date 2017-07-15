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

  submitHandler(e) {
    e.preventDefault()

    const { state, props } = this
    const { users, toggleAuth } = props
    const user = users.filter(user => state.username === user.username && state.password === user.password)[0]

    if(user) {
      toggleAuth(true)
    }
    else {
      alert('Invalid username or password')
      this.setState({ username: '', password: '' })
    }
  }

  render() {
    const { submitHandler, changeHandler, state, props } = this
    const { toggleAuth } = props

    return (
      <div className="login view">
        <form onSubmit={submitHandler} className="sign-in">
          <TextField
            value={state.username}
            type="text"
            name="username"
            label="Username"
            placeholder="Enter username"
            changeHandler={changeHandler} />

          <TextField
            value={state.password}
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

const mapStateToProps = (state) => ({
  users: state.auth.users
})

const mapDispatchToProps = (dispatch) => ({
  toggleAuth: (logState) => dispatch(toggleAuth(logState))
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
