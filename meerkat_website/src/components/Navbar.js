import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import '../App.css'

function Navbar(){
  return (
    <>
      <nav className="navbar sticky-top navbar-light">
          <Link to='/' className='link'>
            {/* <img src='../../images/IMG_0044.JPG' alt='logo' width='40' height= '50'/> */}
            meerkat
          </Link>
          <Link to='/ourservice' className='link'>our service</Link>
          <Link to='/about' className='link'>about</Link>
          <Link to='/mydashboard' className='link'>my dashboard</Link>
      </nav>
      
    </>
  )
}

export default Navbar