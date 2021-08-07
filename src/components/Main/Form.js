import Personal from '../Form/Personal'
import Education from '../Form/Education'
import Practical from '../Form/Practical'
import Button from '../assets/Button'
import ButtonPDF from '../assets/ButtonPDF'

export default function Form(props) {
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
  } = props
  return (
    <form className='Form'>
      <Personal PI={PI} updatePI={updatePI} uploadPhoto={uploadPhoto} />
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
      <ButtonPDF state={{ PI: PI, EHs: EHs, PEs: PEs }} />
      <Button name='Load Example' color='#c25c0e' handleClick={loadSample} />
      <Button name='Reset' color='#b3211e' handleClick={reset} />
    </form>
  )
}
