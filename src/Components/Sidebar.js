// @flow

import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import './Sidebar.css'

const sizes = [...Array(6).keys()].map(i => 2 ** (i + 4))

type Props = {
      bgColor: string,
      bgSize: number,
      fgColor: string,
      handleBgColorChange: Function,
      handleBgSizeChange: Function,
      handleFgColorChange: Function,
}

class Sidebar extends Component<Props> {
  render() {
    const {
      bgColor,
      bgSize,
      fgColor,
      handleBgColorChange,
      handleBgSizeChange,
      handleFgColorChange,
    } = this.props

    const buttons = sizes.map(size => (
      <button
        className={size === bgSize ? 'active' : ''}
        key={size}
        value={size}
        onClick={handleBgSizeChange}>
        {size}
      </button>
    ))

    return (
      <aside className="Sidebar">
        <section>
          <h2>Background</h2>
          <label>
            color: <SketchPicker color={bgColor} onChange={handleBgColorChange} />
          </label>
          <div>size: {buttons}</div>
        </section>
        <section>
          <h2>Foreground</h2>
          <label>
            color: <SketchPicker color={fgColor} onChange={handleFgColorChange} />
          </label>
        </section>
      </aside>
    )
  }
}

export default Sidebar