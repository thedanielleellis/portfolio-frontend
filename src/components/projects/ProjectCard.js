import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
    const fileName = project.image_url
    const images = require.context('../../images', true)
    let img = images('./' + fileName)

    return (
        <div id='project-list'>
          {/* render React Router LInks for each project */}
          <Link key={project.id} to={`/projects/${project.id}`}>
            <h4>{project.name}</h4>
          </Link>
          <img className='project-thumbnail' alt='project thumbnail' src={img} />
        </div >
      );
};

export default ProjectCard;