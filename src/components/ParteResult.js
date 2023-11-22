import React from 'react'

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
 } ) {

  const parteResultStyle = {
    backgroundColor: backgroundColor,
  }

  return (
    <div>
      <h1>Your funeral announcement</h1>
      <div className='parte-result' style={parteResultStyle}>
        <div className='upper-container container-row space-around'>
            <img className='parte-illustration' src="https://img.freepik.com/free-vector/vintage-religious-original-cross-template_225004-1272.jpg?w=740&t=st=1700577456~exp=1700578056~hmac=7257c89991b8af94178fcd1140a6ece3505ceb65bee8bc3ebed8a0e672af192f" alt="parte" />
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