import Button from '../assets/Button'

export default function Practical(props) {
  const { PEs, addPE, updatePE, deletePE } = props
  const content = PEs.map(PE => (
    <div className='Input-group' key={PE.key} data-key={PE.key}>
      <div className='Input'>
        <label>Company Name</label>
        <input
          type='text'
          id='company_name'
          data-key={PE.key}
          value={PE.company_name}
          onInput={updatePE}
        />
      </div>
      <div className='Input'>
        <label>City</label>
        <input
          type='text'
          id='city'
          data-key={PE.key}
          value={PE.city}
          onInput={updatePE}
        />
      </div>
      <div className='Input'>
        <label>Position Title</label>
        <input
          type='text'
          id='position_title'
          data-key={PE.key}
          value={PE.position_title}
          onInput={updatePE}
        />
      </div>
      <div className='Input'>
        <label>Main Tasks</label>
        <input
          type='text'
          id='main_tasks'
          data-key={PE.key}
          value={PE.main_tasks}
          onInput={updatePE}
        />
      </div>
      <div className='Input-time'>
        <div className='Input'>
          <label>From</label>
          <input
            type='month'
            id='from'
            data-key={PE.key}
            value={PE.from}
            onInput={updatePE}
          />
        </div>
        <div className='Input'>
          <label>To</label>
          <input
            type='month'
            id='to'
            data-key={PE.key}
            value={PE.to}
            onInput={updatePE}
          />
        </div>
      </div>

      <Button
        name='Delete'
        handleClick={deletePE}
        data_key={PE.key}
        color='#b3211e'
      />
    </div>
  ))
  return (
    <div className='Section'>
      <h3>Practical Experience</h3>
      {content}
      <Button name='Add' handleClick={addPE} color='#333' />
    </div>
  )
}
