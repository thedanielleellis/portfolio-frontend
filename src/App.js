import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'


class App extends React.Component {
  render () {
    return (
      <div className = "App" id='page-top'>
        <NavBar />
        {/* When URL matches specified path, render component */}
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </div>
    );
  }
}

export default App;
