import React, { Component } from 'react'
import emptyAvatar from '../assets/empty_avatar.png'
import sample from '../assets/sample.jpg'
import formatMonth from '../../modules/formatMonth'
import '../../styles/index.css'

export default class Preview extends Component {
  render() {
    const format = date => {
      if (date !== '') return formatMonth(date)
      return ''
    }
    const { PI, EHs, PEs } = this.props.state
    const EH_contents = EHs.map(EH => (
      <div className='input' key={EH.key}>
        <strong className='time'>
          <span className='from'>{format(EH.from)}</span>
          &nbsp;～&nbsp;
          <span className='to'>{format(EH.to)}</span>
        </strong>
        <div className='details'>
          <div className='school'>
            <strong className='name'>{EH.school_name}</strong>
            <span className='city'>{EH.city && `, ${EH.city}`}</span>
          </div>
          <div className='degree'>
            <strong>Degree</strong>: {EH.degree}
          </div>
          <div className='major'>
            <strong>Major</strong>: {EH.major}
          </div>
        </div>
      </div>
    ))
    const PE_contents = PEs.map(PE => (
      <div className='input' key={PE.key}>
        <strong className='time'>
          <span className='from'>{format(PE.from)}</span>
          &nbsp;～&nbsp;
          <span className='to'>{format(PE.to)}</span>
        </strong>
        <div className='details'>
          <strong className='position'>{PE.position_title}</strong>
          <div className='company'>
            <span className='name'>
              <strong>Company</strong>: {PE.company_name}
            </span>
            <span className='city'>{PE.city && `, ${PE.city}`}</span>
          </div>
          <div className='tasks'>
            <strong>Tasks</strong>: {PE.main_tasks}
          </div>
        </div>
      </div>
    ))
    return (
      <div className='Preview _Preview'>
        <div className='_header'>
          <div className='full-name'>
            <span className='first-name'>{PI.first_name}</span>
            <span className='second-name'>
              {PI.last_name && ` ${PI.last_name}`}
            </span>
          </div>
        </div>

        <div className='_body'>
          <div className='_main'>
            <div className='description'>
              <h4>Description</h4>
              {PI.description}
            </div>
            <div className='education'>
              <h4>Education</h4>
              {EH_contents}
            </div>
            <div className='experience'>
              <h4>Experience</h4>
              {PE_contents}
            </div>
          </div>

          <div className='_aside'>
            <img
              src={
                PI.photo === null
                  ? emptyAvatar
                  : PI.photo === 'sample'
                  ? sample
                  : PI.photo
              }
              alt='profile pic'
            />
            <h4>Personal Details</h4>
            <div>
              <h5>Address</h5>
              <span>{PI.address}</span>
            </div>
            <div>
              <h5>Phone Number</h5>
              <span>{PI.phone_number}</span>
            </div>
            <div>
              <h5>Email</h5>
              <span>{PI.email}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
