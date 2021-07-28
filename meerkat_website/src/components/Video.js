import React from 'react'
import '../App.css'
import './Video.css'

function Video(){
  return (
    <div className='sign-container'>
      <video src="../../videos/restaurant1.mp4" autoPlay loop muted />
      <h1>we let you know when that Michelin restaurant has a spot.</h1>
    </div>
  )
}

export default Video