import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './router.style.sass'

import Router  from './router'
import Navbar  from './navbar'
import Navlink from './navlink'

import Home      from '../views/home/home.main'
import Dashboard from '../views/dashboard/dashboard.main'
import Login     from '../views/login/login.main'


export default () => (
  <Router>
    {/* <Navbar>
      <Navlink to="/" text="Home" />
      <Navlink to="/dashboard" text="Dashboard" />
      <Navlink to="/login" text="Login" />
    </Navbar> */}
    <Switch>
      <Home path="/" authRequired exact />
      <Dashboard path="/dashboard" authRequired />
      <Login path="/login" />
    </Switch>
  </Router>
)
