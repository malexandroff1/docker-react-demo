import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state= {
    changed: false
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={() => this.setState(prevState => {
            return {changed: !prevState.changed}
          })}>
             {this.state.changed ? 'I was changed!' : 'I was not changed!'}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  };
}

export default App;
