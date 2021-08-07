import React, { Component } from 'react'
import Button from '../assets/Button'

export default class Education extends Component {
  render() {
    const { EHs, addEH, updateEH, deleteEH } = this.props

    const content = EHs.map((EH) => (
      <div className='Input-group' key={EH.key} data-key={EH.key}>
        <div className='Input'>
          <label>School Name</label>
          <input
            type='text'
            id='school_name'
            data-key={EH.key}
            value={EH.school_name}
            onInput={updateEH}
          />
        </div>
        <div className='Input'>
          <label>City</label>
          <input
            type='text'
            id='city'
            data-key={EH.key}
            value={EH.city}
            onInput={updateEH}
          />
        </div>
        <div className='Input'>
          <label>Degree</label>
          <input
            type='text'
            id='degree'
            data-key={EH.key}
            value={EH.degree}
            onInput={updateEH}
          />
        </div>
        <div className='Input'>
          <label>Major</label>
          <input
            type='text'
            id='major'
            data-key={EH.key}
            value={EH.major}
            onInput={updateEH}
          />
        </div>
        <div className='Input-time'>
          <div className='Input'>
            <label>From</label>
            <input
              type='month'
              id='from'
              data-key={EH.key}
              value={EH.from}
              onInput={updateEH}
            />
          </div>
          <div className='Input'>
            <label>To</label>
            <input
              type='month'
              id='to'
              data-key={EH.key}
              value={EH.to}
              onInput={updateEH}
            />
          </div>
        </div>

        <Button
          name='Delete'
          handleClick={deleteEH}
          data_key={EH.key}
          color='#b3211e'
        />
      </div>
    ))
    return (
      <div className='Section'>
        <h3>Education History</h3>
        {content}
        <Button name='Add' handleClick={addEH} color='#333' />
      </div>
    )
  }
}
