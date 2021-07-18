import React from 'react';
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'
import Blog from '../images/blog.png'
import Email from '../images/email.png'

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© Danielle Ellis 2021</p>
      </div>
        <div className="footer-icons">
          <ul class= "menue simple">
            <li><a href="https://www.facebook.com/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com/?hl=en"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li><a href="https://www.pinterest.com/"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
            <li><a href="https://twitter.com/?lang=en"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          </ul>
        </div>
    </footer>
  )
}

export default Contact

/*
<div id='contact' className='contact'>
            <div className='decoration-line'>CONTACT</div>
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
        </div> */