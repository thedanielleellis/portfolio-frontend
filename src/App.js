import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import Footer from './components/Footer'
import BlogPostsContainer from './containers/BlogPostsContainer'
import ProjectsContainer from './containers/ProjectsContainer';





class App extends React.Component {
  render () {
    return (
      <div className = "App" id='page-top'>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={BlogPostsContainer} />
        <ProjectsContainer />
      </div>
    );
  }
}

export default App;
