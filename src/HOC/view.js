import React from 'react'
import { Route } from 'react-router'

export default (Component) => (props) => (
  <Route {...props} component={Component} />
)
