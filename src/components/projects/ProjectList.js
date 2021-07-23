import React from 'react';
import ProjectCard from './ProjectCard'

const ProjectList = ({allProjects}) => {
  const renderProjects = allProjects.map(project => 
    <ProjectCard key={project.id} project={project} />
  )
  

  return (
    < >
       {renderProjects}    
       
    </ >
  )
}

export default ProjectList