import React from 'react';

export default function ParteResult( { 

  values

  // name, 
  // poem, 
  // announcement, 
  // adressing, 
  // died, 
  // farewell, 
  // adressing2, 
  // familyMembers,
  // backgroundColor,
  // illustrationSource,
  // frameSource,
 } ) {

  const parteResultStyle = {
    backgroundColor: values.backgroundColor,
    backgroundImage: `url(${values.frameSource})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '30vw calc(30vw * 1.414)',
  }

  return (
    <div>
      <h1>Your funeral announcement</h1>
      <div className='parte-result' style={values.parteResultStyle}>
        <div className='upper-container container-row space-around'>
            <img className='parte-illustration' src={ values.illustrationSource } alt="parte illustration" />
            <p className='poem'>{ values.poem }</p>
        </div>
        <p className='announcement'>{ values.announcement }</p>
        <p className='adressing'>{ values.adressing }</p>
        <h2 className='name'>{ values.name}</h2>
        <p className='died'>{ values.died }</p>
        <p className='farewell'>{ values.farewell }</p>
        <p className='adressing2'>{ values.adressing2 }</p>
        <div className='familyMembers-container'>
        { values.familyMembers.map((familyMembers, index) => (
            <div className="familyMember-container" key = { index }>
                <p className='familyMember-name'>{ familyMembers.name }</p>
                <p className='familyMember-role'>{ familyMembers.role }</p>
            </div>
        )
        )}
        </div>
      </div>
    </div>
  )
}
