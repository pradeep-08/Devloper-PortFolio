import React from 'react'
import '../styles/cotact.css';
function contact() {
  return  <>
  <div className="main-contact-container"> 
  <div className='about-me'>Contact</div>
  <div className="contact-description"><span className='contact-span'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</span></div>
    <div className="contact-box-container">

        <div className="contact-box-div">
        <div className="contact-element-container">
        <div className="name-div">
                <div className="name">Name</div>
                <input className='name-input-box' type="text" placeholder='Enter your Name' />
            </div>
            <div className="name-div">
                <div className="name">Email</div>
                <input className='name-input-box' type="text" placeholder='Enter your Email' />
            </div>
            <div className="name-div">
                <div className="name">Massage</div>
                <input className='name-input-box' type="text" placeholder='Enter your Massage' />
            </div>
        </div>
        <div className="button-div1"><div className="button1"><button className='project-button1'>Submit</button></div></div>
        </div>
    </div>


  </div>
   
  </>
    
  
}

export default contact