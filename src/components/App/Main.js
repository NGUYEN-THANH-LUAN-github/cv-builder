import React, { useState } from 'react'
import Form from '../Main/Form'
import Preview from '../Main/Preview'
import formatPhoneNumber from '../../modules/formatPhoneNumber'
import emptyCV from '../assets/emptyCV'
import sampleCV from '../assets/sampleCV'

export default function Main() {
  const [PI, setPI] = useState(emptyCV.PI())
  const [EHs, setEHs] = useState([])
  const [PEs, setPEs] = useState([])

  const updatePI = e => {
    const { id, value } = e.target
    setPI(prevState => ({
      ...prevState,
      [id]: id === 'phone_number' ? formatPhoneNumber(value) : value,
    }))
  }

  const addEH = () => {
    setEHs([...EHs, emptyCV.EH()])
  }
  const addPE = () => {
    setPEs([...PEs, emptyCV.PE()])
  }

  const updateEH = e => {
    const obj = {}
    const { id, value } = e.target
    obj[id] = value
    setEHs(
      EHs.map(EH => {
        return EH.key === e.target.getAttribute('data-key')
          ? Object.assign(EH, obj)
          : EH
      })
    )
  }
  const updatePE = e => {
    const obj = {}
    const { id, value } = e.target
    obj[id] = value
    setPEs(
      PEs.map(PE => {
        return PE.key === e.target.getAttribute('data-key')
          ? Object.assign(PE, obj)
          : PE
      })
    )
  }

  const deleteEH = e => {
    setEHs(EHs.filter(EH => EH.key !== e.target.getAttribute('data-key')))
  }

  const deletePE = e => {
    setPEs(PEs.filter(PE => PE.key !== e.target.getAttribute('data-key')))
  }

  const loadSample = () => {
    setPI(sampleCV.PI)
    setEHs(sampleCV.EHs)
    setPEs(sampleCV.PEs)
  }

  const reset = () => {
    setPI(emptyCV.PI)
    setEHs([])
    setPEs([])
  }

  const uploadPhoto = e => {
    setPI(prevState => ({
      ...prevState,
      photo: URL.createObjectURL(e.target.files[0]),
    }))
  }

  return (
    <main className='Main'>
      <Form
        PI={PI}
        uploadPhoto={uploadPhoto}
        loadSample={loadSample}
        reset={reset}
        updatePI={updatePI}
        EHs={EHs}
        addEH={addEH}
        updateEH={updateEH}
        deleteEH={deleteEH}
        PEs={PEs}
        addPE={addPE}
        updatePE={updatePE}
        deletePE={deletePE}
        state={{ PI: PI, EHs: EHs, PEs: PEs }}
      />
      <Preview state={{ PI: PI, EHs: EHs, PEs: PEs }} />
    </main>
  )
}
