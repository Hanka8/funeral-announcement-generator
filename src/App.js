import React, { useState } from 'react';
import './App.css';
import ParteResult from './components/ParteResult';
import ParteInfoInput from './components/ParteInfoInput';
import ParteDesignIpnput from './components/ParteDesignInput';

function App() {

  const [name, setName] = useState('');
  const [poem, setPoem] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const [adressing, setAdressing] = useState('');
  const [died, setDied] = useState('');
  const [farewell, setFarewell] = useState('');
  const [adressing2, setAdressing2] = useState('');
  const [familyMembers, setFamilyMembers] = useState([{ name: '', role: '' }]);

  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const imageSrcs = [

  ];

  return (
    <>
    <div className='container-row gap-4'>
      <div className='parte-forms'>

        <ParteDesignIpnput
          setBackgroundColor={setBackgroundColor}
          backgroundColor={backgroundColor}
        />

        <ParteInfoInput 
          setPoem={setPoem}
          setAnnouncement={setAnnouncement}
          setAdressing={setAdressing}
          setName={setName}
          setDied={setDied}
          setFarewell={setFarewell}
          setAdressing2={setAdressing2}
          setFamilyMembers={setFamilyMembers}
          poem={poem}
          announcement={announcement}
          adressing={adressing}
          name={name}
          died={died}
          farewell={farewell}
          adressing2={adressing2}
          familyMembers={familyMembers}
      />

      </div>


      <ParteResult 
        name = { name || 'Jon Doe' } 
        poem = { poem || 'Your presence we miss, Your memories we treasure, Loving you always, Forgetting you never.'}
        announcement = { announcement || 'It is with deep sorrow that we announce the passing of'} 
        adressing = { adressing || 'Mr'}
        died = { died || 'He peacefully left us at 8. November 1845, surrounded by His loved ones'}
        farewell = { farewell || 'The last farewell will be held on Tuesday at 19:00 in the ceremonial hall in Prague.'}
        adressing2 = { adressing2 || 'on behalf of the beloved family'}
        familyMembers = { familyMembers }
        backgroundColor = { backgroundColor }
      />
    </div>

    <footer>
      <a href="http://www.freepik.com">Images designed by rawpixel.com / Freepik</a>
    </footer>

    </>

  )
}

export default App;