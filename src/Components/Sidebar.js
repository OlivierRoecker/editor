import React, { Component } from 'react'
import './Sidebar.css'

class Sidebar extends Component {
    render() {
      const {
        bgColor,
        fgColor,
        handleBgColorChange,
        handleFgColorChange,
      } = this.props
  
      return (
        <aside className="Sidebar">
          <section>
            <h2>Background</h2>
            <label>
              color: <input value={bgColor} onChange={handleBgColorChange} />
            </label>
          </section>
          <section>
            <h2>Foreground</h2>
            <label>
              color: <input value={fgColor} onChange={handleFgColorChange} />
            </label>
          </section>
        </aside>
      )
    }
  }

export default Sidebar