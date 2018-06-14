// @flow

import React, { Component } from 'react'
import './Sidebar.css'

import SectionWithColorPicker from './SectionWithColorPicker'
import MouseProvider from './MouseProvider'

const sizes = [...Array(6).keys()].map(i => 2 ** (i + 4))

type Props = {
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
  // actions
  handleBgColorChange: Function,
  handleBgSizeChange: Function,
  handleFgColorChange: Function,
  handleFgRotateChange: Function,
  handleFgScaleChange: Function,
  handleFilenameChange: Function,
}

const filenames = ['werewolf.svg', 'vampire.svg']

class Sidebar extends Component<Props> {
  render() {
    const {
      bg,
      fg,
      handleBgColorChange,
      handleBgSizeChange,
      handleFgColorChange,
      handleFgRotateChange,
      handleFgScaleChange,
      handleFilenameChange,
    } = this.props

    return (
      <aside className="Sidebar">
        <SectionWithColorPicker
          title="Background"
          subtitle={<h3>Salut</h3>}
          color={bg.color}
          handleChange={handleBgColorChange}>
          <div>
            size:{' '}
            {sizes.map(size => (
              <button
                className={size === bg.size ? 'active' : ''}
                key={size}
                value={size}
                onClick={handleBgSizeChange}>
                {size}
              </button>
            ))}
          </div>
        </SectionWithColorPicker>

        <SectionWithColorPicker
          title="Foreground"
          color={fg.color}
          subtitle={<h6>Salut</h6>}
          handleChange={handleFgColorChange}>
          <div>
            <button onClick={() => handleFgRotateChange(-10)}>-10</button>
            <button onClick={() => handleFgRotateChange(+10)}>+10</button>
            <button onClick={() => handleFgScaleChange('x')}>x</button>
            <button onClick={() => handleFgScaleChange('y')}>y</button>
          </div>
          <select value={fg.filename} onChange={handleFilenameChange}>
            {filenames.map(f => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </SectionWithColorPicker>

        <MouseProvider>
          {(mouseX, mouseY) => (
            <section>
              <h2>Coords</h2>
              <label>x {mouseX}</label>
              <label>y {mouseY}</label>
            </section>
          )}
        </MouseProvider>
      </aside>
    )
  }
}

export default Sidebar