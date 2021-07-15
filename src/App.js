import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import Home from './components/Home';
import NavBar from './components/NavBar.js'



class App extends React.Component {
  render () {
    return (
      <div className = "App">
      <Home />
      
      </div>
    )
  }
};

export default App;
