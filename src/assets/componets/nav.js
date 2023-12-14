import React from 'react';
import '../styles/nav.css';
import Logo from '../../images/3817242.jpg';
 

function nav() {

  return <>
    <div className="nav-bar">
      <div className="nav-containers">
        <div className="pro-img">
          <img className='logo-image' src={Logo} alt="" />
        </div>
        <div className="logo-name"> Pradeep . </div>
      </div>
        <div className="nav-container-two">
        <div className="nav-items" >HOME</div>
        <div className="nav-items" >ABOUT</div>
        <div className="nav-items">CONTACT</div>
        <div className="nav-items">PROJECTS</div>
        <div className="resume">My Resume</div>
      </div>
    </div>
  </>
    
  
}

export default nav