import React from 'react'
import ViewsHOC from '../../HOC/view.hoc'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


const Login = () => <Redirect to='/' />
export default ViewsHOC(Login)
