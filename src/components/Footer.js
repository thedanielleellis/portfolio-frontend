import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;









/*
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

export default Contact */