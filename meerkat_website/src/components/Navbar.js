import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import '../App.css'

function Navbar(){
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo'>
            {/* <img src='../../images/IMG_0044.JPG' alt='logo' width='40' height= '50'/> */}
            Meerkat
          </Link>
        
        </div>
      </nav>
      
    </>
  )
}

export default Navbar