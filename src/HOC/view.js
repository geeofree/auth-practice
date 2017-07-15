import React from 'react'
import { Route } from 'react-router-dom'

export default (Component) => (props) => (
  <Route {...props} component={Component} />
)
