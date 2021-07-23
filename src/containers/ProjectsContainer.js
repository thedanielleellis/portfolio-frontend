import React from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ProjectList from '../components/projects/ProjectList'
import ProjectDetails from '../components/projects/ProjectDetails'
import fetchProjects from "../actions/fetchProjects";
import { addFilter, removeFilter } from '../actions/filterProjects';




class ProjectsContainer extends React.Component {
    componentDidMount() {
      this.props.fetchProjects()
    }

    render() {
      const { filteredProjects, addFilter, removeFilter } = this.props
      return (
          <div id='projects-container' className='component'>
            < >
            <Route path='/projects/:projectId' render={routerProps => <ProjectDetails {...routerProps} projects={filteredProjects} />} />
            <Route exact path='/projects' render={() =>  
              <div id='portfolio'>
                <h1>PROJECTS</h1> <br></br>
                <ProjectList filteredProjects={filteredProjects} />
              </div>
              } />

            </>
          </div>

          
        )
      
    }
}

const mapStateToProps = state => {
  return {
    filteredProjects: state.projects.filteredProjects,
  }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: () => dispatch(fetchProjects()),
        addFilter: () => dispatch(addFilter()),
        removeFilter: () => dispatch(removeFilter())
    }
}
      
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer) 