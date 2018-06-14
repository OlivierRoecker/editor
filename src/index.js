// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './Components/store'

// $FlowFixMe

const refresh = () => {
  ReactDOM.render(
    <App reduxState={store.getState()} />,
    document.getElementById('root'),
  )
}

store.subscribe(refresh)

// init
refresh()