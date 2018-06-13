// @flow

import React, { Component } from 'react'
import './Canvas.css'

type Props = {
  bgColor: string,
  bgSize: number,
  fgColor: string,
}

class Canvas extends Component<Props> {
    render() {
      const { bgColor, bgSize, fgColor } = this.props
      return (
        <div className="Canvas">
          <div className="bg" style={{ backgroundColor: bgColor, height: bgSize, width: bgSize }}>
            <div className="fg" style={{ backgroundColor: fgColor }} />
          </div>
        </div>
      )
    }
  }
  
  export default Canvas