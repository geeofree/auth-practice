import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './router.style.sass'

import Router from './router'
import Navbar from './navbar'
import Navlink from './navlink'

import Home from '../views/home/home.main'
import Login from '../views/login/login.main'


export default () => (
  <Router>
    <Navbar>
      <Navlink to="/" text="Home" />
      <Navlink to="/login" text="Login" />
    </Navbar>
    <Switch>
      <Home path="/" exact />
      <Login path="/login" authRequired />
    </Switch>
  </Router>
)
