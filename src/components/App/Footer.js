import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className='Footer'>
        <div className='footer-content'>
          made by n.t.luan
          <a
            target='_blank'
            href='https://github.com/NGUYEN-THANH-LUAN-github/task-app'
            rel='noreferrer'>
            <i className='fab fa-github text'></i>
          </a>
        </div>
      </footer>
    )
  }
}
