import React from 'react'
import { Redirect } from 'react-router-dom'


export default class AuthPage extends React.Component {
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this)

    this.state = {
      redirect: false
    }
  }

  clickHandler(e) {
    this.setState({ redirect: true })
  }

  render() {
    const { clickHandler } = this
    const { redirect } = this.state

    return (
      redirect ? <Redirect to='/login' /> : (
        <div className="auth view">
          <h1><a onClick={clickHandler}>Sign in</a> to view this page</h1>
        </div>
      )
    )
  }
}
