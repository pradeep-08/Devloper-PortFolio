import React from 'react'
import '../styles/skills.css';
import Logo from '../../images/skillstwo.jpg';
function skills() {
  return <><div className="main-div1">
        <h2 className='skills'>MY SKILLS</h2>
        
        <div className="skills-container-main">
        <div className="skills-container-second">
            <img  className="skills-image" src={Logo} alt="" />
            </div>
        <div className="skills-container">
            <div className="first-row"> 
            <div className="skills-items">HTML</div>
            <div className="skills-items">CSS</div>
            <div className="skills-items">GIT</div>
            <div className="skills-items">GITHUB</div>
            </div>
           <div className="second-row"> 
           <div className="skills-items">REACT</div>
            <div className="skills-items">JS</div>
            <div className="skills-items">NODE JS</div>
            </div>
            <div className="third-row"> <div className="skills-items">MONGODB Basic</div>
            
            <div className="skills-items ">SQL Basic</div>
            </div>
            <div className="fourth-row"><div className="skills-items adjustment">RESPONSIVE WEB</div></div>
            </div>
            
        </div>
  </div></>
    
  
}

export default skills