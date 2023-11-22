import React, { useState } from 'react';
import ParteResult from './components/ParteResult';

import './App.css';

function App() {

  const [name, setName] = useState('');
  const [poem, setPoem] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const [adressing, setAdressing] = useState('');
  const [died, setDied] = useState('');
  const [farewell, setFarewell] = useState('');
  const [adressing2, setAdressing2] = useState('');
  const [familyMembers, setFamilyMembers] = useState([{ name: '', role: '' }]);

  const handleAddFamilyMember = () => {
    setFamilyMembers([...familyMembers, { name: '', role: '' }]);
  };

  const handleRemoveFamilyMember = (index) => {
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers.splice(index, 1);
    setFamilyMembers(updatedFamilyMembers);
  };

  const handleFamilyMemberChange = (index, field, value) => {
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers[index][field] = value;
    setFamilyMembers(updatedFamilyMembers);
  };

  return (
    <div className='container-row gap-4'>
      <form className='container-column align-start'>
        
        <label htmlFor="poem">Poem: </label>
        <textarea 
          id="poem" 
          rows="4" 
          cols="50"
          placeholder='Poem'
          onChange={ (e) => setPoem(e.target.value)}
          />

        <label htmlFor="nameannouncement">Announcement: </label>
        <textarea
          id="nameannouncement"
          rows="4" 
          cols="50"
          placeholder='Announcement'
          value={ announcement}
          onChange={ (e) => setAnnouncement(e.target.value) }
        />

        <label htmlFor="adressing">Adressing: </label>
        <input 
          id='adressing'
          type="text"
          placeholder='Adressing'
          value = { adressing }
          onChange={ (e) => setAdressing(e.target.value) }
        />

        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          placeholder='Name'
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />

        <label htmlFor="died">Died: </label>
        <textarea
          id="died"
          rows="4" 
          cols="30"
          placeholder='Announcement'
          value={ died }
          onChange={ (e) => setDied(e.target.value) }
        />

        <label htmlFor="farewell">Farewell: </label>
        <textarea
          id="died"
          rows="4" 
          cols="40"
          placeholder='Farewell'
          value={ farewell }
          onChange={ (e) => setFarewell(e.target.value) }
        />

        <label htmlFor="adressing2">Adressing2: </label>
        <input
          id="adressing2"
          type="text"
          placeholder='adressing 2'
          value={ adressing2 }
          onChange={ (e) => setAdressing2(e.target.value) }
        />

        <label htmlFor="familyMembers">Family Members:</label>
        {familyMembers.map((member, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Family Member #${index + 1} Name`}
              value={member.name}
              onChange={(e) => handleFamilyMemberChange(index, 'name', e.target.value)}
            />
            <input
              type="text"
              placeholder={`Family Member #${index + 1} Role`}
              value={member.role}
              onChange={(e) => handleFamilyMemberChange(index, 'role', e.target.value)}
            />
            <button type="button" onClick={() => handleRemoveFamilyMember(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddFamilyMember}>
          Add Family Member
        </button>


      </form>
      <ParteResult 
        name = { name || 'Jon Doe' } 
        poem = { poem || 'Your presence we miss, Your memories we treasure, Loving you always, Forgetting you never.'}
        announcement = { announcement || 'It is with deep sorrow that we announce the passing of'} 
        adressing = { adressing || 'Mr'}
        died = { died || 'He peacefully left us at 8. November 1845, surrounded by His loved ones'}
        farewell = { farewell || 'The last farewell will be held on Tuesday at 19:00 in the ceremonial hall in Prague.'}
        adressing2 = { adressing2 || 'on behalf of the beloved family'}
        familyMembers = { familyMembers }
      />
    </div>
  )
}

export default App;