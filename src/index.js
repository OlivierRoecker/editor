// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// $FlowFixMe
ReactDOM.render(<App />, document.getElementById('root'))

/// scratch pad

const REGEX = /fill=".*?" d="(.*)"/

const promiseHTTPRes = fetch('werewolf.svg')
const promiseText = promiseHTTPRes.then((HTTPRes) => {
  return HTTPRes.text()
})
const promiseD = promiseText.then((text) => {
  const matches = REGEX.exec(text)
  return matches[1]
})
promiseD.then(console.log)