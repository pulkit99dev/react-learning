//^Class based components
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
  switchNameHandler = (newName) =>{
    console.log('Executed on click')
    //^set state feature in function for updating DOM

    this.setState ({
      person: [
        {name : newName, age : 23},
        {name : 'Pulkit', age : 21},
        {name : 'Pankaj', age : 22},
      ]
    })

  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchNameHandler.bind(this, 'Sachin')}></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>i like Cricket</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}>{this.state.counter}</Person>
        
        <button onClick = {() => this.switchNameHandler('Nitin')}> Switch Names </button>
      </div>
    );
  }
}

export default App;





// Function based React Components using Hooks


// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const App = props => {
  //array destructuring
//   const [personState, setPersonState] = useState({
//     person : [
//             {name : 'Pulkit', age : '21'},
//              {name : 'Pankaj', age : '22'},
//              {name : 'Nitin', age : '23'}
//            ]
//   });
//   console.log(personState);

  // another use state
//   const switchNameHandler = () =>{
//         console.log('Executed on click')
//  //^set state feature in function for updating DOM
    
//         setPersonState ({
//           person: [
//             {name : 'Nitin', age : 23},
//             {name : 'Pulkit', age : 21},
//             {name : 'Pankaj', age : 22},
//           ]
//         });
    
//       };



//     return (
//       <div className="App">
//         <h1>React App</h1>
//         <Person name={personState.person[0].name} age={personState.person[0].age}></Person>
//         <Person name={personState.person[1].name} age={personState.person[1].age}>i like Cricket</Person>
//         <Person name={personState.person[2].name} age={personState.person[2].age}></Person>
        
//         <button onClick = {switchNameHandler}> Switch Names </button>
//       </div>
//     );
//   }

// export default App;


