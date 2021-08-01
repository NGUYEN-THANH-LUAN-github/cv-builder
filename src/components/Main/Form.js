import React, { Component } from 'react'
import Personal from '../Form/Personal'
import Education from '../Form/Education'
import Practical from '../Form/Practical'
import Button from '../assets/Button'
import ButtonPDF from '../assets/Print'

export default class Form extends Component {
  render() {
    const {
      PI,
      loadSample,
      reset,
      uploadPhoto,
      updatePI,
      EHs,
      addEH,
      updateEH,
      deleteEH,
      PEs,
      addPE,
      updatePE,
      deletePE,
    } = this.props
    return (
      <form className='Form'>
        <Personal PI={PI} updatePI={updatePI} uploadPhoto={uploadPhoto}/>
        <Education
          EHs={EHs}
          addEH={addEH}
          updateEH={updateEH}
          deleteEH={deleteEH}
        />
        <Practical
          PEs={PEs}
          addPE={addPE}
          updatePE={updatePE}
          deletePE={deletePE}
        />
        <ButtonPDF state={this.props.state} />
        <Button name='Load Example' color='#c25c0e' handleClick={loadSample}/>
        <Button name='Reset' color='#b3211e' handleClick={reset}/>
      </form>
    )
  }
}
