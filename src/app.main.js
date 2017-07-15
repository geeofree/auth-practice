import React from 'react'
import { render } from 'react-dom'
import './app.style.sass'

import AppRoutes from './router/router.main'

const App = () => (
    <AppRoutes />
)


const root = document.getElementById('root')
render(<App />, root)
