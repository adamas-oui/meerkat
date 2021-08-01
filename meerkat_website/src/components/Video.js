import React from 'react'
import '../App.css'
import './Video.css'

function Video(){
  return (
    
    <div className='container-fluid'>
      <br />
      <video src="../../videos/restaurant1.mp4" autoPlay loop muted />
    </div>
    
  )
}

export default Video