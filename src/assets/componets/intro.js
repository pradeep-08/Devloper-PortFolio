import React from 'react';
import '../styles/intro.css';
import Intro from '../../images/intro.jpg';


function intro() {
  return <>
    <div className="main-div">
    <div className="image-div">
    <img className='intro-img' src={Intro} alt="" />
    <div className="main-name"><span className='shadow'><h5>HI, I'M PRADEEP .</h5></span></div>
    <div>
    <div className="description">Web Developer</div>
    </div>
    
    </div>
    <div className="info">
      <div className='info-2'>
      A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product .
      </div></div>
      <div className="button-div"><div className="button"><button className='project-button'>PROJECT</button></div></div>
    </div>
  </>
    
  
}

export default intro