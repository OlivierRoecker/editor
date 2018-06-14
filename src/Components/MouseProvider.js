// @flow

import { Component } from 'react'

type Props = {
  children: Function
}

type State = {
  mouseX: number,
  mouseY: number,
}

class MouseProvider extends Component<Props, State> {
  state = {
    mouseX: 0,
    mouseY: 0,
  }

  handleMouseMove = ({ x, y }: { x: number, y: number }) => {
    this.setState({
      mouseX: x,
      mouseY: y,
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  componentWillUnmount() {
    window.removeListener(this.handleMouseMove)
  }

  render() {
    return this.props.children(this.state.mouseX, this.state.mouseY)
  }
}

export default MouseProvider

