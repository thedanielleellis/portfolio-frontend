import React from 'react';
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'
import Blog from '../images/blog.png'
import Email from '../images/email.png'

const Contact = () => {
  return (
    <footer className="footer">
      <div className="left-footer">
        <p>© Danielle Ellis 2021</p>
      </div>
      <div id='contact' className='contact right-footer'>
            <a href="https://www.linkedin.com/in/daniellerichardson1/" target="_blank" rel="noopener noreferrer">
            <img alt="linkedin_icon" src={Linkedin} />
            </a>
            <a href="https://github.com/thedanielleellis" target="_blank" rel="noopener noreferrer">
             <img alt="linkedin_icon" src={Github} />
             </a>
            <a href="https://dev.to/thedanielleellis" target="_blank" rel="noopener noreferrer">
             <img alt="linkedin_icon" src={Blog} />
            </a>
            <a href="mailto:thedanielleellis@gmail.com" target="_blank" rel="noopener noreferrer">
             <img alt="email_icon" src={Email} />
             </a>
          </div>      
    </footer>
  )
}

export default Contact