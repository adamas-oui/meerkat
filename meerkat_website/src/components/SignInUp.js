import React from 'react'
import { useEffect, useRef } from 'react';
import { Component } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import '../App.css'
import './SignInUp.css'


class SignInUp extends React.Component{

  onSignUpClick(event){
    
  }
  
  onSignInClick(event){
  
  }
  
  
  render(){
    return (
      <>
      <div className="container">
            
        <div className="overlay" id="overlay" >
        
          <div className="sign-in" id="sign-in">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="switch-button" id="slide-right-button" onClick={this.onSignInClick}>Sign In</button>
          </div>
          
          <div className="sign-up" id="sign-up">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start a journey with us</p>
            <button className="switch-button" id="slide-left-button" onClick={this.onSignUpClick}>Sign Up</button>
          </div>
          
        </div>
        
        
        
        <div className="form">
        
          <div className="sign-in" id="sign-in-info">
            <h1>Sign In</h1>      
            <div className="social-media-buttons">
              <div className="icon">
              <svg viewBox="0 0 24 24">
                  <path fill="#000000" d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
              </svg>
              </div>
            </div>
            
            <p className="small">or use your email account:</p>
            <form id="sign-in-form">      
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <p className="forgot-password">Forgot your password?</p>
              <button className="control-button in">Sign In</button>
            </form>
          </div>
          
          
          <div className="sign-up" id="sign-up-info">
            <h1>Create Account</h1>
            <div className="social-media-buttons">
              <div className="icon">
              <svg viewBox="0 0 24 24">
                  <path fill="#000000" d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
              </svg>
              </div>
            </div>
            <p className="small">or use your email for registration:</p>
            <form id="sign-up-form">
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <button className="control-button up">Sign Up</button>
            </form>
          </div>
          
          
        </div>
        
        
        
      </div>
      </>
    )
  }
  
}

export default SignInUp
