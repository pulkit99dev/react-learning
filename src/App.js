//^Class based components
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //state
  state= {
    persons : [
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
      persons: [
        {name : newName, age : 23},
        {name : 'Pulkit', age : 21},
        {name : 'Pankaj', age : 22},
      ],
      showPersons : false
    })

  }

  nameChangeHandler = (event) =>{
    this.setState ({
      person: [
        {name : 'Nitin', age : 23},
        {name : 'Pulkit', age : 21},
        {name : event.target.value, age : 22},
      ]
    })
  }

  deleteHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow })
  }

  render() {

    const style ={
      'background-color' : 'white',
      font : 'inherit',
      border : '1px solid red',
      padding : '8px',
      cursor : 'pointer'
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              click = {() => this.deleteHandler('index')}
              name = {person.name}
              age = {person.age} />
          })}
        {/* <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchNameHandler.bind(this, 'Sachin')}></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} >i like Cricket</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} changed={this.nameChangeHandler}>{this.state.counter}</Person> */}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>React App</h1>
        
       {/* { this.state.showPersons ? */}
          
        {/* } */}
        {persons}
        <button onClick = {this.togglePersonHandler} style={style}> Toggle cards </button>
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


