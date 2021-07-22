import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
    
    const fileName = project.attributes.image_url
    const images = require.context('../../images', true)
    let img = images('./' + fileName).default

    return (
        <div id='project-list'>
          <Link key={project.id} to={`/projects/${project.id}`}>
            <h4>{project.attributes.name}</h4>
          </Link>
          <img className='project-thumbnail' alt='project thumbnail' src={img} />
        <hr />
        </div >
      );
};

export default ProjectCard;