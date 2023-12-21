import React from 'react'
import '../styles/end.css';
import Logo from '../../images/download.png';
function End() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  return  <>
              <div className="end-container">
              <div className="end-main-div">
            <div className="end-name">Pradeep</div>
            <div className="end-descriptions">A Frontend focused Web Developer building the Frontend of Websites 
            and Web Applications that leads to the success of the overall product.</div>
            
              </div>
              <div className="end-second-div">
                <img className='image-qr' src={Logo} alt="" />
                <div className="social-descriptions">
                <div className="social">Social</div>
                <div className="social-icons">
                <img className='email-icon' onClick={() => openInNewTab('https://www.linkedin.com/in/pradeep-t-1b97491aa/')} width="38" height="38" src="https://img.icons8.com/color/68/linkedin.png" alt="linkedin"/>
                <img className='email-icon' onClick={() => window.location = 'mailto:pradeep.tasp.0802@gmail.com'} width="38" height="38" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"/>
                </div>
               
                </div>
                
              </div>
              <div className="copy-right">Pradeep</div>
              </div>
              
        
  </>

}

export default End