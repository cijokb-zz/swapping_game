import React, { Component } from 'react';
import './App.css';
// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './Home';
import GameLevel from './GameLevel';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Swapping Game</h1>
          </header>
          <div className="container">
            <Route path="/" exact= {true} component={Home}/>
            <Route path="/gameLevel" component ={GameLevel}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
