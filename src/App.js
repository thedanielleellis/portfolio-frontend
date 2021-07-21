import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import ProjectsContainer from './containers/ProjectsContainer';
import BlogPostsContainer from './containers/BlogPostsContainer';



class App extends React.Component {
  render () {
    return (
      <div className = "App" id='page-top'>
        <NavBar />
        <Footer />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={BlogPostsContainer} />
        <Route path='/projects' component={ProjectsContainer} />
      </div>
    );
  }
}

export default App;
