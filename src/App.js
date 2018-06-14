// @flow

import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas';
import Sidebar from './Components/Sidebar';

type Color = {
  hex: string,
}

class App extends Component<{}> {
  render() {
    const { bg, fg } = this.props.reduxState

    return (
      <div className="App">
        <Sidebar
          bg={bg}
          fg={fg}
        />
        <Canvas bg={bg} fg={fg} />
      </div>
    )
  }
}

export default App