// @flow

import * as React from 'react';

import Picker from './Picker'

type Props = {
  title: string,
  color: string,
  handleChange: Function,
  children?: React.Node,
};

class SectionWithColorPicker extends React.Component<Props> {
  render() {
    const { title, subtitle, color, handleChange, children } = this.props
    return (
      <section>
        <h2>My Super {title}</h2>
        { subtitle }

        <label>
          color: <Picker color={color} handleChange={handleChange} />
        </label>

        {children}
      </section>
    )
  }
}

export default SectionWithColorPicker