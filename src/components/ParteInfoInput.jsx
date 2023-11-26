import React, { useState } from "react";

export default function ParteInfoInput({ 
    values, 
    handleChange,
    setValues
}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleAddFamilyMember = () => {
        setValues((prevValues) => {
            return {
                ...prevValues,
                familyMembers: [...prevValues.familyMembers, {name: '', relationship: ''}]
            }
        });
    };

    const handleRemoveFamilyMember = (index) => {
        const updatedFamilyMembers = [...values.familyMembers];
        updatedFamilyMembers.splice(index, 1);
        setValues((prevValues) => {
            return {
                ...prevValues,
                familyMembers: updatedFamilyMembers
            }
        });
    };

    const handleFamilyMemberChange = (index, field, value) => {
        const updatedFamilyMembers = [...values.familyMembers];
        updatedFamilyMembers[index][field] = value;
        setValues((prevValues) => {
            return {
                ...prevValues,
                familyMembers: updatedFamilyMembers
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
            value={ values.poem }
            onChange={ (e) => handleChange(e)}
            />

            <label htmlFor="announcement">Announcement: </label>
            <textarea
            id="announcement"
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
            id="farewell"
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

            <label htmlFor="familyMembers">Family Members:</label>
            {(values.familyMembers).map((member, index) => (
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
                    value={member.relationship}
                    onChange={(e) => handleFamilyMemberChange(index, 'relationship', e.target.value)}
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