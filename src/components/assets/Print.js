import React, { Component } from 'react'
import ReactToPrint from 'react-to-print'
import Preview from '../Main/Preview'

export default class ButtonPDF extends Component {
  render() {
    return (
      <div className='Print'>
        {/* throws warning because react-to-print uses findDOMNode */}
        <ReactToPrint
          trigger={() => (
            <button type='button' style={{ backgroundColor: '#1ba148' }}>
              Generate PDF
            </button>
          )}
          content={() => this.componentRef}
        />
        <Preview
          state={this.props.state}
          ref={(el) => (this.componentRef = el)}
        />
      </div>
    )
  }
}
