import React from 'react'
import '../styles/second.css';
import Logo from '../../images/19362653.jpg';

function second() {
  return <>
    <div className='second-page-container'>
        <h2 className='about-me'>ABOUT ME</h2>
        <div className="container">
        <div className="child">
        <div className="know-me">Get to know me!</div>
        <div className='about-content'>Hi, I'm <span className='size-text'>Pradeep</span>, a <span className='size-text'>Front-end developer</span> with expertise in HTML, CSS, and JS. Passionate about creating user-friendly designs, I'm actively seeking new opportunities.
        Despite my background, I've completed a Full Stack Web Development course on Udemy, sharpening my frontend skills. I'm eager to design captivating user interfaces and committed to ongoing learning, ready to contribute as a junior frontend developer.
        <div className='about-content second'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</div>
         </div>
         
        </div>
        
        <img className='image' src={Logo} alt="" />
       
        </div>
        
        <div className="button-div1"><div className="button1"><button className='project-button1'>CONTACT ME</button></div></div>
    </div>
  </>
    
  
}

export default second