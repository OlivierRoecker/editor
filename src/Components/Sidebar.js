// @flow

import React, { Component } from 'react'
import './Sidebar.css'
import store from './store'

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
}

const filenames = ['werewolf.svg', 'vampire.svg']

class Sidebar extends Component<Props> {
  render() {
    const { bg, fg } = this.props

    return (
      <aside className="Sidebar">
        <SectionWithColorPicker
          title="Background"
          subtitle={<h3>Salut</h3>}
          color={bg.color}
          handleChange={({ hex }) =>
            store.dispatch({ type: 'CHANGE_BG_COLOR', payload: { color: hex } })
          }>
          <div>
            size:{' '}
            {sizes.map(size => (
              <button
                className={size === bg.size ? 'active' : ''}
                key={size}
                value={size}
                onClick={() =>
                  store.dispatch({
                    type: 'CHANGE_BG_SIZE',
                    payload: { size: Number(size) },
                  })
                }>
                {size}
              </button>
            ))}
          </div>
        </SectionWithColorPicker>

        <SectionWithColorPicker
          title="Foreground"
          color={fg.color}
          subtitle={<h6>Salut</h6>}
          handleChange={({ hex }) =>
            store.dispatch({ type: 'CHANGE_FG_COLOR', payload: { color: hex } })
          }>
          <div>
            <button
              onClick={() =>
                store.dispatch({
                  type: 'CHANGE_FG_ROTATE',
                  payload: { offset: -10 },
                })
              }>
              -10
            </button>
            <button
              onClick={() =>
                store.dispatch({
                  type: 'CHANGE_FG_ROTATE',
                  payload: { offset: 10 },
                })
              }>
              +10
            </button>
            <button
              onClick={() =>
                store.dispatch({
                  type: 'CHANGE_FG_SCALE',
                  payload: { axis: 'x' },
                })
              }>
              x
            </button>
            <button
              onClick={() =>
                store.dispatch({
                  type: 'CHANGE_FG_SCALE',
                  payload: { axis: 'y' },
                })
              }>
              y
            </button>
          </div>
          <select
            value={fg.filename}
            onChange={evt =>
              store.dispatch({
                type: 'CHANGE_FG_FILENAME',
                payload: { filename: evt.currentTarget.value },
              })
            }>
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