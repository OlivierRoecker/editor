// @flow

import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas';
import Sidebar from './Components/Sidebar';

type State = {
  bg: {
    color: string,
    size: number,
  },
  fg: {
    color: string,
    rotate: number,
    scalex: number,
    scaley: number,
  },
}

type Color = {
  hex: string,
}

class App extends Component<{}, State> {
  state = {
    bg: {
      color: 'green',
      size: 512,
    },
    fg: {
      color: 'yellow',
      rotate: 0,
      scalex: 1,
      scaley: 1,
    },
  }

  handleBgColorChange = ({ hex }: Color) => {
    this.setState({
      bg: { ...this.state.bg, color: hex },
    })
  }

  handleBgSizeChange = (evt: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({
      bg: {
        ...this.state.bg,
        size: Number(evt.currentTarget.value),
      },
    })
  }

  handleFgColorChange = ({ hex }: Color) => {
    this.setState({
      fg: { ...this.state.fg, color: hex },
    })
  }

  handleFgRotateChange = (offset: number) => {
    this.setState({
      fg: { ...this.state.fg, rotate: this.state.fg.rotate + offset },
    })
  }

  handleFgScaleChange = (axis: string) => {
    const key = `scale${axis}`
    this.setState({
      fg: { ...this.state.fg, [key]: this.state.fg[key] * -1 },
    })
  }

  render() {
    const { bg, fg } = this.state

    return (
      <div className="App">
        <Sidebar
          bg={bg}
          fg={fg}
          handleBgColorChange={this.handleBgColorChange}
          handleBgSizeChange={this.handleBgSizeChange}
          handleFgColorChange={this.handleFgColorChange}
          handleFgRotateChange={this.handleFgRotateChange}
          handleFgScaleChange={this.handleFgScaleChange}
        />
        <Canvas bg={bg} fg={fg} />
      </div>
    )
  }
}

export default App