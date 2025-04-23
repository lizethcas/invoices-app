const Filter = ({ status, radioName, handleSelected, slected }) => {

    return (
      <div className='filter'>
        <input type="radio" name={radioName} id={status} value={status} checked={slected === status} onChange={() => handleSelected(status)} />
        <label htmlFor={status}>{status}</label>
      </div>
    )
  }

export default Filter
