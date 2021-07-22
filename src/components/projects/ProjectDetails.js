import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import CommentsContainer from '../../containers/CommentsContainer'

const ProjectDetails = ({ match, projects }) => {
  const project = projects.find(proj => proj.id.toString() === match.params.projectId)
  
  const renderProject = () => {
      const fileName = project.attributes.image_url
      const images = require.context('../../images', true)
      let img = images('./' + fileName).default

        return [
            <Container>
              <Link to={'/projects'}>
                <button className='btn btn-outline-secondary'>&laquo; BACK</button>
              </Link>
      
              <div className='component'>
                <h3>{project.attributes.name}</h3>
                <img className='project-thumbnail' alt='project thumbnail' src={img} />
                <div className='text' id='project-text'>
                  <h6>Description</h6>
                  <p>{project.attributes.description}</p>
                </div>
                {project.attributes.blog_url ? <button className="btn btn-outline-danger btn-lg" onClick={() => window.open(project.attributes.blog_url, "_blank")}>BLOG POST</button> : null}
                {project.attributes.github_url ? <button className="btn btn-outline-danger btn-lg" onClick={() => window.open(project.attributes.github_url, "_blank")}>SOURCE CODE</button> : null}
                {project.attributes.demo_vid ?
                  <div>
                    <h5>Project Demo</h5>
                    <iframe title="Demo" width="560" height="315" src={project.attributes.demo_vid} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  :
                  null
                }
                <hr />
                <CommentsContainer project={project} />
              </div>
            </Container>
       ]
      }

  return (
  < >
    {project ? renderProject() : <i>This project does not exist. See all projects on Portfolio page.</i>}
  </>
  )
}
  

export default ProjectDetails