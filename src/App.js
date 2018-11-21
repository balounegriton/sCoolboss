import React, { Component } from 'react';
import './ScollSpeed.js';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './Home.js'
import about from './about/About.js'
import Project1 from './project/Project1.js'




class App extends Component {




  render() {

    return (

      <HashRouter>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={about} />

          <Route path='/project1' component={Project1 } />


        </Switch>
      </HashRouter>
    );
  }
}

export default App;
