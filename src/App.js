import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //state
  state= {
    person : [
      {name : 'Pulkit', age : '21'},
      {name : 'Pankaj', age : '22'},
      {name : 'Nitin', age : '23'}
    ]
  }

  //^ creating switch button function to execute the required task
  switchNameHandler = () =>{
    console.log('Executed on click')
    //^set state feature in function for updating DOM

    this.setState ({
      person: [
        {name : 'Nitin', age : 23},
        {name : 'Pulkit', age : 21},
        {name : 'Pankaj', age : 22},
      ]
    })

  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>i like Cricket</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}>{this.state.counter}</Person>
        
        <button onClick = {this.switchNameHandler}> Switch Names </button>
      </div>
    );
  }
}

export default App;
