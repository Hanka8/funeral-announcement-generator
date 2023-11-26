import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import illustrations from './components/illustrations';
import frames from './components/frames';
import ParteResult from './components/ParteResult';
import ParteInfoInput from './components/ParteInfoInput';
import ParteDesignIpnput from './components/ParteDesignInput';
import Footer from './components/Footer';

function App() {

  const [values, setValues] = useState({
    name: '',
    poem: '',
    announcement: '',
    adressing: '',
    died: '',
    farewell: '',
    adressing2: '',
    familyMembers: [{name: '', relationship: ''}],
  });

  const [design, setDesign] = useState({
    backgroundColor: "#ffffff",
    frame: frames[0],
    illustration: illustrations[0],
  });

  function handleChange(event) {
      const {id, value, type, checked} = event.target
      setValues(prevFormData => {
          return {
              ...prevFormData,
              [id]: type === "checkbox" ? checked : value
          }
      })
  }

  function handleDesignChange(event) {
    const {name, value, type, checked} = event.target
    setDesign(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }

  return (
    <>
      <div className='container-row gap-4'>
        <div className='parte-forms'>
          <ParteDesignIpnput 
            design={design} 
            handleDesignChange={handleDesignChange}
          />
          <ParteInfoInput 
            values={values}
            setValues={setValues} 
            handleChange={handleChange} 
          />
        </div>
        <ParteResult 
          values={values} 
          design={design}
          handleDesignChange={handleDesignChange}
        />
      </div>
      <Footer />
    </>
  )
}

export default App;