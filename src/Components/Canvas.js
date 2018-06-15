// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Canvas.css'

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
}

type State = {
  d: string,
}

const fetchSvg = (filename: string) => {
  console.log({ filename })
  const REGEX = /fill=".*?" d="(.*)"/
  return fetch(filename)
    .then(HTTPRes => HTTPRes.text())
    .then(text => REGEX.exec(text)[1])
}

class Canvas extends Component<Props, State> {
  state = {
    d: '',
  }

  componentDidMount() {
    if (this.props.fg.filename)
      fetchSvg(this.props.fg.filename).then(d => this.setState({ d }))
  }

  componentDidUpdate(prevProps) {
    console.log('didUpdate')
    if (
      this.props.fg.filename &&
      this.props.fg.filename !== prevProps.fg.filename
    )
      fetchSvg(this.props.fg.filename).then(d => this.setState({ d }))
  }

  render() {
    if (!this.state.d) return null

    const { bg, fg } = this.props
    return (
      <div className="Canvas">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          style={{ height: bg.size, width: bg.size }}>
          <path fill={bg.color} d="M0 0h512v512H0z" />
          <path
            fill={fg.color}
            transform={`rotate(${fg.rotate}) scale(${fg.scalex}, ${fg.scaley})`}
            d={this.state.d}
          />
        </svg>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bg: state.bg,
  fg: state.fg,
})

export default connect(mapStateToProps)(Canvas)