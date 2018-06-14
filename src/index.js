// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// $FlowFixMe
ReactDOM.render(<App />, document.getElementById('root'))

/// scratch pad

const REGEX = /fill=".*?" d="(.*)"/
fetch('werewolf.svg')
  .then(HTTPRes => HTTPRes.text())
  .then(text => REGEX.exec(text)[1])
  .then(console.log)