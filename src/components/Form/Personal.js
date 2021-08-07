import React, { Component } from 'react'

export default class Personal extends Component {
  render() {
    const { PI, updatePI, uploadPhoto } = this.props
    return (
      <div className='Section'>
        <h3>Personal Information</h3>
        <div className='Input-name'>
          <div className='Input'>
            <label>First Name</label>
            <input
              type='text'
              id='first_name'
              value={PI.first_name}
              onInput={updatePI}
            />
          </div>
          <div className='Input'>
            <label>Last Name</label>
            <input
              type='text'
              id='last_name'
              value={PI.last_name}
              onInput={updatePI}
            />
          </div>
        </div>

        <div className='Input'>
          <label>Email</label>
          <input type='email' id='email' value={PI.email} onInput={updatePI} />
        </div>
        <div className='Input'>
          <label>Phone Number</label>
          <input
            type='tel'
            id='phone_number'
            value={PI.phone_number}
            onInput={updatePI}
            maxLength={15}
          />
        </div>
        <div className='Input'>
          <label>Address</label>
          <input
            type='text'
            id='address'
            value={PI.address}
            onInput={updatePI}
          />
        </div>
        <div className='Input'>
          <label>Description</label>
          <textarea
            type='text'
            id='description'
            value={PI.description}
            onInput={updatePI}
          />
        </div>
        <div className='custom-file-upload'>
          <label htmlFor='photo'>
            Upload Photo <i className='fas fa-upload'></i>
          </label>
          <input
            type='file'
            id='photo'
            accept='image/*'
            onChange={uploadPhoto}
          />
        </div>
      </div>
    )
  }
}
