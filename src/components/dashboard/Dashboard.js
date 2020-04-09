import React, { useState } from 'react';
import '../../App.css';
import SideBar from '../sidebar/SideBar';
import Content from '../content/Content';
import { BrowserRouter as Router } from 'react-router-dom'


function Dashboard() {

    const [isOpen, setOpen] = useState(true)
    const toggle = () => setOpen(!isOpen)
  
    return (
      <Router>
        <div className="App wrapper">
          <SideBar toggle={toggle} isOpen={isOpen}/>
          <Content toggle={toggle} isOpen={isOpen}/>
        </div>
      </Router>
    );
  }
  
  export default Dashboard;