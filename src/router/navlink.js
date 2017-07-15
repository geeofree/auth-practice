import React from 'react'
import { Link } from 'react-router'


export default ({ exact, to, text }) => (
  <Link exact={exact} to={to} className="navlink">{text}</Link>
)
