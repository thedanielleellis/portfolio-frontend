import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
    
    const fileName = project.image_url
    const images = require.context('../../images', true)

    return (
        <div id='project-list'>
          <Link key={project.id} to={`/projects/${project.id}`}>
            <h4>{project.attributes.name}</h4>
          </Link>
          <img className='project-thumbnail' alt='project thumbnail' src="https://i.imgur.com/g5iq8k9.png" />
        </div >
      );
};

export default ProjectCard;