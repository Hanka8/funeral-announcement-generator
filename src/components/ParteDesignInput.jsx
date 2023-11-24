import React from 'react'
import illustrations from './illustrations';
import frames from './frames';

export default function ParteDesignInput({
    
    handleChange,

    // setBackgroundColor,
    // setIllustrationSource,
    // setFrameSource,
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
                    onChange={ (e) => handleChange(e)}
                />
            
                <label htmlFor="illustrationSource">Illustration: </label>
                <div className='container-row gap-1'>
                    {illustrations.map((img, i) => (
                            <div className='container-column gap-05'>
                                <input key={i} type="radio" name="illustrationSource" value={img} onChange={(e) => handleChange(e)}
                                    />
                                <img className='mini-img' src={img} alt="illustration" />
                            </div>
                    ))}
                </div>

                <label htmlFor="frameSource">Frame: </label>
                <div className='container-row gap-1'>
                    {frames.map((img, i) => (
                        <div className='container-column gap-05' key={`${i}_2`}>
                            <input
                                type="radio"
                                name="frameSource"
                                value={img}
                                onChange={(e) => handleChange(e)}
                            />
                            <img className='mini-img' src={img} alt="frame" />
                        </div>
                    ))}
                </div>

            </div>
      </form>
  )
}
