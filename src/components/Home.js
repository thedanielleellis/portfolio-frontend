import React, { Component } from 'react';
import Linkedin from '../images/linkedin.png'
import Github from '../images/github.png'
import Blog from '../images/blog.png'
import Email from '../images/email.png'

class Home extends Component {
    render() {
        return (
            <div id='home'>
                <div className="container1">
                    <div className="headshot">
                    <img src="https://i.imgur.com/UfrUbLq.jpg" alt="Danielle Ellis Headshot" width="300" height="300"/>  
                    <h1 className="title"> DANIELLE ELLIS </h1>
                    <h3>Full-Stack Software Engineer</h3>
                    <br></br>
                    <h4> Let's Connect! </h4>
                    <br></br>
                    <div className="social-wrapper">
                        <div className="social">
                            <a href="https://www.linkedin.com/in/daniellerichardson1/" target="_blank" rel="noopener noreferrer">
                            <img alt="linkedin_icon" src={Linkedin} />
                            </a>
                            <a href="https://github.com/thedanielleellis" target="_blank" rel="noopener noreferrer">
                            <img alt="linkedin_icon" src={Github}/>
                            </a>
                            <a href="https://dev.to/thedanielleellis" target="_blank" rel="noopener noreferrer">
                            <img alt="linkedin_icon" src={Blog} />
                            </a>
                            <a href="mailto:thedanielleellis@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img alt="email_icon" src={Email} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Home