import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    counter: 0
  }
  increment = () =>{
    let { counter } = this.state;
    counter+=1;
    this.setState({
      counter
    })
  }
  render() {
    let { counter } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Counter:{counter}</h2>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default App;
