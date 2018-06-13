import React, { Component } from 'react'
import './Canvas.css'

class Canvas extends Component {
  render() {
    const { bgColor } = this.props
    return (
      <div className="Canvas">
        <div className="bg" style={{ backgroundColor: bgColor }}/>
      </div>
    )
  }
}

export default Canvas