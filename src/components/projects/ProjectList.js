import React from 'react';
import ProjectCard from './ProjectCard'

const ProjectList = ({ filteredProjects }) => {
    const renderProjects = filteredProjects.map(project =>
      <ProjectCard key={project.id} project={project} />
    )

  return (
    < >
        renderProjects
        :
        <i>There are no matching results.</i>
    
    </ >
  )
}

export default ProjectList