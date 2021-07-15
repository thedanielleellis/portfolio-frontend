import React from 'react';

const About = () => {
  return (
    <div id='about' className='component'>
      <div className='text' id='about-text'>
        <h1>ABOUT ME</h1>
        <h2>Full-stack Software Engineer</h2>
        <div className='text-section'>
          <h6>This is a paragraph all about ME!</h6>
        </div>
        <div className='text-section' id='skills'>
          <h4> Technical Skills</h4>
          <h5> Ruby, Javascript, HTML CSS Rails, Sinatra, React, Redux PostgreSQL, SQL</h5><br />
        </div>
      </div>
    </div>
  )
}

export default About