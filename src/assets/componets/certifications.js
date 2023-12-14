import React from 'react'
import '../styles/certification.css';
import Udemy from '../../images/Udemy.jpg';
import Guvi from '../../images/guvi.png';

function certifications() {
  return <>
  <div className="main-div1">
  <div className='certification'>Certifications</div>
    <div className="certificate-container">
        <div className="certificate-1">
            <img className='udemy-certificate' src={Udemy} alt="" />
            <div className="summary">
       <span className='summary-description'>Completed Udemy's Full Stack Development course, mastering front-end and back-end technologies. Proficient in HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Acquired hands-on experience in building responsive web applications. Demonstrated expertise in deploying and managing databases,
     RESTful APIs, and server-side development. Ready to contribute comprehensive full-stack skills to dynamic software development projects.</span> </div>
        </div>    
        <div className="certificate-1">
        <div className="summary">
       <span className='summary-description'>Earned Full Stack Development certification from Guvi, excelling in HTML, CSS, and JavaScript for front-end, and Node.js with Express.js for back-end. Demonstrated proficiency in database management, RESTful API creation, and server-side development. Acquired practical skills for designing and deploying robust web applications. Ready to apply this comprehensive certification for impactful contributions in Full Stack Development.</span> </div>
            <img className='udemy-certificate' src={Guvi} alt="" />
            
        </div>  
        
    </div>
  </div>
  

  </>
}

export default certifications