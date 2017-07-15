import React from 'react'
import { render } from 'react-dom'
import './app.style.sass'

import state from './app.state'
import { Provider } from 'react-redux'

import AppRoutes from './router/router.main'

const App = () => (
  <Provider store={state}>
    <AppRoutes></AppRoutes>
  </Provider>
)


const root = document.getElementById('root')
render(<App />, root)
