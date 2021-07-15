import React from 'react';

const Home = (props) => {
  return (
    <div className="home">
      <div className="home-left">
        <img src="https://i.imgur.com/UfrUbLq.jpg" alt="Danielle Ellis Headshot"/>
        <div className="social">
          <h2>Danielle Ellis</h2>
          <p>Dallas, TX</p>
          <hr className="line"/>
          <h3><a target="_blank" rel="noreferrer" href="https://github.com/thedanielleellis">GitHub</a> | <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/daniellerichardson1/">LinkedIn</a></h3>
        </div>
      </div>

      <div className="home-right">
        <h1>About Me</h1>
        <hr className="line"/>
        <p>
          Hello, my name is Danielle Ellis! This will be my About Me Section.</p>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
        </p>    
      </div>
    </div>
  );
}; 

export default Home;