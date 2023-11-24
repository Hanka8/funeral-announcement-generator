import React, { useState } from 'react';
import './App.css';
import illustrations from './components/illustrations';
import frames from './components/frames';
import ParteResult from './components/ParteResult';
import ParteInfoInput from './components/ParteInfoInput';
import ParteDesignIpnput from './components/ParteDesignInput';

function App() {

  const [values, setValues] = useState({
    name: '',
    poem: '',
    announcement: '',
    adressing: '',
    died: '',
    farewell: '',
    adressing2: '',
    familyMembers: [{ name: '', role: '' }],
    backgroundColor: '#ffffff',
    illustrationSource: illustrations[0],
    frameSource: frames[0],
  });

  // const [name, setName] = useState('');
  // const [poem, setPoem] = useState('');
  // const [announcement, setAnnouncement] = useState('');
  // const [adressing, setAdressing] = useState('');
  // const [died, setDied] = useState('');
  // const [farewell, setFarewell] = useState('');
  // const [adressing2, setAdressing2] = useState('');
  // const [familyMembers, setFamilyMembers] = useState([{ name: '', role: '' }]);

  // const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  // const [illustrationSource, setIllustrationSource] = useState(illustrations[0]);
  // const [frameSource, setFrameSource] = useState(frames[0]);

  function handleChange(event) {
    console.log(event);
    const { name, value, type, checked } = event.target;
    setValues(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'radio' ? checked : value
      }
    });
  }

  return (
    <>
    <div className='container-row gap-4'>
      <div className='parte-forms'>

        <ParteDesignIpnput

          handleChange={handleChange}
          values={values}

          // setBackgroundColor={setBackgroundColor}
          // setIllustrationSource={setIllustrationSource}
          // setFrameSource={setFrameSource}
        />

        <ParteInfoInput 

          handleChange={handleChange}
          values={values}
          setValues={setValues}

          // setPoem={setPoem}
          // setAnnouncement={setAnnouncement}
          // setAdressing={setAdressing}
          // setName={setName}
          // setDied={setDied}
          // setFarewell={setFarewell}
          // setAdressing2={setAdressing2}
          // setFamilyMembers={setFamilyMembers}
          // poem={poem}
          // announcement={announcement}
          // adressing={adressing}
          // name={name}
          // died={died}
          // farewell={farewell}
          // adressing2={adressing2}
          // familyMembers={familyMembers}
      />

      </div>

      <ParteResult 

        values={values}

        // name = { name || 'Jon Doe' } 
        // poem = { poem || 'Your presence we miss, Your memories we treasure, Loving you always, Forgetting you never.'}
        // announcement = { announcement || 'It is with deep sorrow that we announce the passing of'} 
        // adressing = { adressing || 'Mr'}
        // died = { died || 'He peacefully left us at 8. November 1845, surrounded by His loved ones'}
        // farewell = { farewell || 'The last farewell will be held on Tuesday at 19:00 in the ceremonial hall in Prague.'}
        // adressing2 = { adressing2 || 'on behalf of the beloved family'}
        // familyMembers = { familyMembers }
        // backgroundColor = { backgroundColor }
        // illustrationSource = { illustrationSource }
        // frameSource = { frameSource }
      />
    </div>

    <footer>
      <a href="http://www.freepik.com">Images designed by rawpixel.com / Freepik</a>
      <a href="https://www.freepik.com/free-vector/calligraphic-ornamental-frames-set_8608971.htm#query=frames&position=37&from_view=search&track=sph&uuid=04117eeb-dd41-4cbc-94d0-f7be79723cb6">Image by pch.vector</a> on Freepik
    </footer>

    </>

  )
}

export default App;