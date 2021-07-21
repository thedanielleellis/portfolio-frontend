import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

const ProjectDetails = ({ match, projects }) => {
    const project = projects.find(proj => proj.id.toString() === match.params.projectId)
  
    const renderProject = () => {
        const fileName = project.image_url
        const images = require.context('../../images', true)
        let img = images('./' + fileName)

        return [
            <Container>
              <Link to={'/projects'}>
                <button className='btn btn-outline-secondary'>&laquo; BACK</button>
              </Link>
      
              <div className='component'>
                <h3>{project.name}</h3>
                <img className='project-thumbnail' alt='project thumbnail' src={img} />
                <div className='text' id='project-text'>
                  <h6>What is it?</h6>
                  <p>{project.description}</p>
                </div>
                {project.blog_url ? <button className="btn btn-outline-danger btn-lg" onClick={() => window.open(project.blog_url, "_blank")}>BLOG POST</button> : null}
                {project.github_url ? <button className="btn btn-outline-danger btn-lg" onClick={() => window.open(project.github_url, "_blank")}>SOURCE CODE</button> : null}
                {project.demo_vid ?
                  <div>
                    <h5>Project Demo</h5>
                    <iframe title="Umami Pantry Demo" width="560" height="315" src={project.demo_vid} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  :
                  null
                }
              </div>
            </Container>
        ]
      }
    }

export default ProjectDetails