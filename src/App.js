// @flow

import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas';
import Sidebar from './Components/Sidebar';

type State = {
  bgColor: string,
  bgSize: number,
  fgColor: string,
}

type Color = {
  hex: string,
}

class App extends Component<{}, State> {
  state = {
    bgColor: 'green',
    bgSize: 512,
    fgColor: 'yellow',
  }

  handleBgColorChange = ({ hex }: Color) => {
    this.setState({
      bgColor: hex,
    })
  }

  handleBgSizeChange = (evt: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({
      bgSize: Number(evt.currentTarget.value),
    })
  }

  handleFgColorChange = ({ hex }: Color) => {
    this.setState({
      fgColor: hex,
    })
  }

  render() {
    const { bgColor, bgSize, fgColor } = this.state

    return (
      <div className="App">
        <Sidebar
          bgColor={bgColor}
          bgSize={bgSize}
          fgColor={fgColor}
          handleBgColorChange={this.handleBgColorChange}
          handleBgSizeChange={this.handleBgSizeChange}
          handleFgColorChange={this.handleFgColorChange}
        />
        <Canvas bgColor={bgColor} bgSize={bgSize} fgColor={fgColor} />
      </div>
    )
  }
}

export default App