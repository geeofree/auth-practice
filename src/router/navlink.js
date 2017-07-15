import React from 'react'
import { Link } from 'react-router-dom'


export default ({ to, text }) => (
  <Link to={to}>
    <div className="navlink">{text}</div>
  </Link>
)
