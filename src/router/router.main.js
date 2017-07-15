import React from 'react'
import { Route, Switch } from 'react-router'

import Router from './router'
import Navbar from './navbar'
import Navlink from './navlink'

import Home from '../views/home/home.main'
import Login from '../views/login/login.main'


export default () => (
  <Router>
    <Navbar>
      <Navlink text="/" exact />
      <Navlink text="/login" />
    </Navbar>
    <Switch>
      <Home path="/" exact />
      <Login path="/login" />
    </Switch>
  </Router>
)
