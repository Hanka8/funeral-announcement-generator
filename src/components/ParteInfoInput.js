import React from 'react'

export default function ParteInfoInput({
    setPoem,
    setAnnouncement,
    setAdressing,
    setName,
    setDied,
    setFarewell,
    setAdressing2,
    setFamilyMembers,
    poem,
    announcement,
    adressing,
    name,
    died,
    farewell,
    adressing2,
    familyMembers,
}) {

    const [isOpen, setIsOpen] = React.useState(false);

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
        </div>
      </form>
  )
}
