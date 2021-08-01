import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { name, color, handleClick, data_key } = this.props
    return (
      <button
        type='button'
        style={{ backgroundColor: color }}
        onClick={handleClick}
        data-key={data_key}>
        {name}
      </button>
    )
  }
}
