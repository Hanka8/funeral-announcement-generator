import React from 'react'

export default function ParteInfoInput({
    setBackgroundColor,
    backgroundColor,
}) {

    const [isOpen, setIsOpen] = React.useState(false);



  return (
        <form className = { isOpen ? "open parte-info-input" : "closed parte-info-input" }>
        <div className='container-row space-between header'>
            <h1>Funeral announcement design</h1>
            <button className='btn' onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen)
                }
                }>
                { isOpen ? 'Close' : 'Open' }
            </button>
        </div>
        <div className='container-column align-start accordion'>
            
            <label htmlFor="background-color">Background-color: </label>
            <input 
                type='color' 
                id='background-color' 
                name='background-color'
                onChange={ (e) => setBackgroundColor(e.target.value)}
            />

        </div>
      </form>
  )
}
