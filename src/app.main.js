import React from 'react'
import { render } from 'react-dom'
import './app.style.sass'

const HelloWorld = () => <h1>HelloWorld</h1>
const root = document.getElementById('root')
render(<HelloWorld></HelloWorld>, root)
