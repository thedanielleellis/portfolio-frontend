import React from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ProjectList from '../components/projects/ProjectList'
import ProjectDetails from '../components/projects/ProjectDetails'
import fetchProjects from "../actions/fetchProjects";


class ProjectsContainer extends React.Component {
    componentDidMount() {
      this.props.fetchProjects()
    }

    render() {
      const { allProjects} = this.props
        return (
          <div id='projects-container' className='component'>
            < >
            <Route path='/projects/:projectId' render={routerProps => <ProjectDetails {...routerProps} projects={allProjects} />} />
            <Route exact path='/projects' render={() =>  
              <div id='portfolio'>
                <h1>PROJECTS</h1> <br></br>
                <ProjectList allProjects={this.props.allProjects} />
              </div>
              } />

            </>
          </div>

          
        )
      
    }
}

const mapStateToProps = state => {
  return {
    allProjects: state.projects.allProjects,
  }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: () => dispatch(fetchProjects()),
    }
}
      
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer) 