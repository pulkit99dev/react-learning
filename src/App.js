import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //state
  state= {
    counter : 101
  }
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Person name='ABC' age='21'></Person>
        <Person name='gjh' age='25'>i like Cricket</Person>
        <Person name='uoiuo' age='30'>{this.state.counter}</Person>
      </div>
    );
  }
}

export default App;
