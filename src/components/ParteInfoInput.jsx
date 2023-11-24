import React from 'react'

export default function ParteInfoInput({

    handleChange,
    values,
    setValues,

    // setPoem,
    // setAnnouncement,
    // setAdressing,
    // setName,
    // setDied,
    // setFarewell,
    // setAdressing2,
    // setFamilyMembers,
    // poem,
    // announcement,
    // adressing,
    // name,
    // died,
    // farewell,
    // adressing2,
    // familyMembers,
}) {

    const [isOpen, setIsOpen] = React.useState(false);

    const handleAddFamilyMember = () => {
        // setFamilyMembers([...familyMembers, { name: '', role: '' }]);
        setValues(prevFormData => {
            return {
              ...prevFormData,
              familyMembers: [...prevFormData.familyMembers, { name: '', role: '' }]
            }
        });
    };

    const handleRemoveFamilyMember = (index) => {
        // const updatedFamilyMembers = [...familyMembers];
        // updatedFamilyMembers.splice(index, 1);
        // setFamilyMembers(updatedFamilyMembers);
        setValues(prevFormData => {
            return {
              ...prevFormData,
              familyMembers: [...prevFormData.familyMembers.splice(index, 1)]
            }
        });
    };

    const handleFamilyMemberChange = (index, field, value) => {
        // const updatedFamilyMembers = [...familyMembers];
        // updatedFamilyMembers[index][field] = value;
        // setFamilyMembers(updatedFamilyMembers);
        setValues(prevFormData => {
            return {
              ...prevFormData,
              familyMembers: [...prevFormData.familyMembers[index][field] = value]
            }
        });
    };

  return (
        <form className = { isOpen ? "open parte-info-input" : "closed parte-info-input" }>
        <div className='container-row space-between header'>
            <h1>Funeral announcement info</h1>
            <button className='btn' onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen)
                }
                }>
                { isOpen ? 'Close' : 'Open' }
            </button>
        </div>
        <div className='container-column align-start accordion'>
            <label htmlFor="poem">Poem: </label>
            <textarea 
            id="poem" 
            rows="4" 
            cols="50"
            placeholder='Poem'
            onChange={ (e) => handleChange(e) }
            />

            <label htmlFor="nameannouncement">Announcement: </label>
            <textarea
            id="nameannouncement"
            rows="4" 
            cols="50"
            placeholder='Announcement'
            value={ values.announcement}
            onChange={ (e) => handleChange(e) }
            />

            <label htmlFor="adressing">Adressing: </label>
            <input 
            id='adressing'
            type="text"
            placeholder='Adressing'
            value = { values.adressing }
            onChange={ (e) => handleChange(e) }
            />

            <label htmlFor="name">Name: </label>
            <input
            id="name"
            type="text"
            placeholder='Name'
            value={ values.name }
            onChange={ (e) => handleChange(e) }
            />

            <label htmlFor="died">Died: </label>
            <textarea
            id="died"
            rows="4" 
            cols="30"
            placeholder='Announcement'
            value={ values.died }
            onChange={ (e) => handleChange(e) }
            />

            <label htmlFor="farewell">Farewell: </label>
            <textarea
            id="died"
            rows="4" 
            cols="40"
            placeholder='Farewell'
            value={ values.farewell }
            onChange={ (e) => handleChange(e) }
            />

            <label htmlFor="adressing2">Adressing2: </label>
            <input
            id="adressing2"
            type="text"
            placeholder='adressing 2'
            value={ values.adressing2 }
            onChange={ (e) => handleChange(e) }
            />


            {/* HERE _____________________ ===>*/}
            <label htmlFor="familyMembers">Family Members:</label>
            { values.familyMembers.map((member, index) => (
            <div key={index}>
                <input
                type="text"
                placeholder={`Family Member #${index + 1} Name`}
                value={member.name}
                onChange={(e) => handleChange(e)}
                />
                <input
                type="text"
                placeholder={`Family Member #${index + 1} Role`}
                value={member.role}
                onChange={(e) => handleChange(e)}
                />
                <button type="button" onClick={() => handleRemoveFamilyMember(index)}>
                Remove
                </button>
            </div>
            )) }
            <button type="button" onClick={handleAddFamilyMember}>
            Add Family Member
            </button>
        </div>
      </form>
  )
}
