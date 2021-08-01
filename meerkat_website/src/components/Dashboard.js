import React, { useState } from 'react';
import Calendar from './Calendar';

function CreateDashboard() {
  function childCallBack(value) {
    //value pass from child
  }

  const [input, setInput] = useState({
    phoneNum: '',
    newRestaurant: '',
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
    console.log(input)
  }
  
  
  return (
    
    <div className='container-fluid'> 
      <br />
      <form> 
        <div className='form-group'>
          <label className='sr-only'>My Phone Number: </label>
          <input className='form-control-plaintext' value='123456 read from mongodb'></input>
          <input onChange={handleChange} name="phoneNum" value={input.phoneNum} className='form-control' placeholder="Enter your new phone number"></input>
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
      
      <div className='form-group'>
        
        <Calendar />
        <br />
        <button onClick={handleClick} className="btn btn-success float-end">Confirm my updated dates</button>
      </div>
      
    </div>
  )
}

export default CreateDashboard;