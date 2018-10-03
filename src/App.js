import React, { Component } from 'react';
import './ScollSpeed.js';
import './App.css';
import {HashRouter, Route, Switch } from 'react-router-dom'
import Home from './Home.js'
import about from './component/About.js'
import Project2 from './component/Project2'



class App extends Component {
  constructor() {
    super();

  }




  render() {

    return (

<HashRouter>
  
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={about} />
        <Route path='/test' component={Project2} />
      </Switch>
      </HashRouter>
    );
  }
}

export default App;
