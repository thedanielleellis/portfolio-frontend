import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ProjectList from '../components/projects/ProjectList'
import ProjectDetails from '../components/projects/ProjectDetails'
import { fetchProjects } from "../actions/fetchProjects";
import Loading from '../images/loading.gif'

class ProjectsContainer extends Component {
  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    const {loading} = this.props
    return (
      <div id='projects-container' className='component'>
        {
          loading ?
            <img src={Loading} alt='loading' />
            :
            < >
              {/* define parameter name in route path - show up in match.params */}
              {/* replace `component` prop w/ `render` prop so we can pass route info to `ProjectDetails` component*/}
              <Route path='/projects/:projectId' render={routerProps => <ProjectDetails {...routerProps} />} />
              <Route exact path='/projects' render={() =>
                <div id='portfolio'>
                  <h1>PORTFOLIO</h1>
                  <h3>My Latest Projects</h3>
                  <ProjectList />
                </div>
              } />
            </ >
        }
      </div >
    )
  }
}

// passing in the state from the Redux store
// so we can access values in our stores as props
const mapStateToProps = state => {
  return {
    stacks: state.projects.stacks,
    selectedStackIds: state.projects.selectedStackIds,
    filteredProjects: state.projects.filteredProjects,
    loading: state.projects.loading
  }
}

// gives us ability to dispatch new actions to our store directly from this component
const mapDispatchToProps = dispatch => {
  return {
    // wrap actions in a dispatch & anonymous fn to pass them as callback props
    // when called, dispstch fn will invoke reducer and result in new updated state
    fetchProjects: () => dispatch(fetchProjects()),
  }
}

// connect redux store to this component
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)
