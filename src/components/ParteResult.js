import React from 'react';

export default function ParteResult( { 
  name, 
  poem, 
  announcement, 
  adressing, 
  died, 
  farewell, 
  adressing2, 
  familyMembers,
  backgroundColor,
  illustrationSource,
  frameSource,
 } ) {

  const parteResultStyle = {
    backgroundColor: backgroundColor,
    backgroundImage: `url(${frameSource})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }

  return (
    <div>
      <h1>Your funeral announcement</h1>
      <div className='parte-result' style={parteResultStyle}>
        <div className='upper-container container-row space-around'>
            <img className='parte-illustration' src={ illustrationSource } alt="parte illustration" />
            <p className='poem'>{ poem }</p>
        </div>
        <p className='announcement'>{ announcement }</p>
        <p className='adressing'>{ adressing }</p>
        <h2 className='name'>{ name }</h2>
        <p className='died'>{ died }</p>
        <p className='farewell'>{ farewell }</p>
        <p className='adressing2'>{ adressing2 }</p>
        <div className='familyMembers-container'>
        { familyMembers.map((familyMember, index) => (
            <div className="familyMember-container" key = { index }>
                <p className='familyMember-name'>{ familyMember.name }</p>
                <p className='familyMember-role'>{ familyMember.role }</p>
            </div>
        )
        )}
        </div>
      </div>
    </div>
  )
}