import React from 'react'
import '../styles/LogResults.css'


const LogResults = ({numero, bien, regular}) => {
  return (
    <div className='res-wrap'>
      <p className='res-p numero'>{numero}</p>
      <p className='res-p bien'>{bien}</p>
      <p className='res-p regular'>{regular}</p>
    </div>
  )
}

export default LogResults