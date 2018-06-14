// @flow

import React, { Component } from 'react';
import './App.css';
import Canvas from './Components/Canvas';
import Sidebar from './Components/Sidebar';

const getFgRotateUpdater = offset => prevState => ({
  fg: { ...prevState.fg, rotate: prevState.fg.rotate + offset },
})

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
    filename: string,
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
      filename: ''
    },
  }

  componentDidMount() {
    // this.intervalId = setInterval(() => this.handleFgRotateChange(10), 1)
  }

  componentWillUnmount() {
    // clearInterval(this.intervalId)
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
    this.setState(getFgRotateUpdater(offset))
  }

  handleFgScaleChange = (axis: string) => {
    const key = `scale${axis}`
    this.setState({
      fg: { ...this.state.fg, [key]: this.state.fg[key] * -1 },
    })
  }

  handleFilenameChange = evt => {
    this.setState({
      fg: { ...this.state.fg, filename: evt.currentTarget.value },
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
          handleFilenameChange={this.handleFilenameChange}
        />
        <Canvas bg={bg} fg={fg} />
      </div>
    )
  }
}

export default App