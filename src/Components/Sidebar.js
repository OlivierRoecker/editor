// @flow

import React, { Component } from 'react'
import './Sidebar.css'

import Picker from './Picker'

const sizes = [...Array(6).keys()].map(i => 2 ** (i + 4))

type Props = {
  bg: {
    color: string,
    size: number,
  },
  fg: {
    color: string,
    rotate: number,
  },
  // actions
  handleBgColorChange: Function,
  handleBgSizeChange: Function,
  handleFgColorChange: Function,
  handleFgRotateChange: Function,
  handleFgScaleChange: Function,
}

class Sidebar extends Component<Props> {
  renderButtons() {
    const { bg, handleBgSizeChange } = this.props

    return sizes.map(size => (
      <button
        className={size === bg.size ? 'active' : ''}
        key={size}
        value={size}
        onClick={handleBgSizeChange}>
        {size}
      </button>
    ))
  }

  render() {
    const {
      bg,
      fg,
      handleBgColorChange,
      handleFgColorChange,
      handleFgRotateChange,
      handleFgScaleChange,
    } = this.props

    return (
      <aside className="Sidebar">
        <section>
          <h2>Background</h2>
          <label>
            color:{' '}
            <Picker color={bg.color} handleChange={handleBgColorChange} />
          </label>
          <div>size: {this.renderButtons()}</div>
        </section>
        <section>
          <h2>Foreground</h2>
          <label>
            color:{' '}
            <Picker color={fg.color} handleChange={handleFgColorChange} />
          </label>
          <div>
            <button onClick={() => handleFgRotateChange(-10)}>-10</button>
            <button onClick={() => handleFgRotateChange(+10)}>+10</button>
            <button onClick={() => handleFgScaleChange('x')}>x</button>
            <button onClick={() => handleFgScaleChange('y')}>y</button>
          </div>
        </section>
      </aside>
    )
  }
}

export default Sidebar