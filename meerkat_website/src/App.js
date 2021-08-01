import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import CreateDashboard from './components/Dashboard'
import CreateService from './components/Service'
import CreateAbout from './components/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component = { Home }/>
      </Switch>
      <Route path="/mydashboard">
        <CreateDashboard />
      </Route>
      <Route path="/ourservice">
        <CreateService />
      </Route>
      <Route path="/about">
        <CreateAbout />
      </Route>
    </Router>
    
  );
}

export default App;
