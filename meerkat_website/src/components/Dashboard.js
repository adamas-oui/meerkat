import React, { useState, useEffect } from 'react';
import Calendar from "./Calendar";
import axios from "axios";

function CreateDashboard() {
  // //fetch data from mongodb to display on the user's dashboard
  // const [profiles, setProfiles] = useState([{
  //   newPhone: '',
  //   newRestaurant: ''
  // }])
  // 
  // useEffect(() => {
  //   fetch("/mydashboard").then(res => {
  //     if(res.ok) {
  //       return res.json()
  //     }
  //   }).then(jsonRes => setProfiles(jsonRes));
  // })
  // 
  
  const [input, setInput] = useState({
    newPhone: '',
    newRestaurant: ''
  })

  function handleChange(event) {
    const {name, value} = event.target;
    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }
  
  function handleClick(event) {
    event.preventDefault();
    const newProfile = {
      newPhone: input.newPhone,
      newRestaurant: input.newRestaurant
    }
    axios.post('http://localhost:3001/create', newProfile)
  }

  
  return (
    
    <div className='container-fluid'> 
      <br />
      <form> 
        <div className='form-group'>
          <label className='sr-only'>My Phone Number: </label>
          {/* <input className='form-control-plaintext' 
                 value={profiles && profiles.map(profile => 
                        <div>
                          <h1>{profile.newPhone}</h1>
                          <h1>{profile.newRestaurant}</h1>
                        </div>
          )}></input> */} 
          <input onChange={handleChange} name="newPhone" autoComplete="off" value={input.newPhone} className='form-control' placeholder="Enter your new phone number"></input>
        </div>
        <br />
        <button onClick={handleClick} className='btn btn-success float-end'> Update my phone number</button>
      </form>
      
      <br />
      <h2> My Restaurants: </h2>
      <h5>/upload mongodb here</h5>
      
      <div className='form-group'>
        <input onChange={handleChange} name="newRestaurant" value={input.newRestaurant} className='form-control' placeholder="Place the link of the restaurant"></input>
        <br />
        <button onClick={handleClick} className="btn btn-success float-end">Update my list</button>
        
      </div>
      <br />
      <br />
      <Calendar />
    </div>
  )
}

export default CreateDashboard;