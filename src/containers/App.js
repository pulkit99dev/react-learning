//^Class based components
import React, { Component } from 'react';
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
import person from '../components/Persons/Person/Person';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  //state
  state= {
    persons : [
      {id : 'qwer', name : 'Pulkit', age : '21'},
      {id : 'asdf', name : 'Pankaj', age : '22'},
      {id : 'zxcv', name : 'Nitin', age : '23'}
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

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ({
      persons: persons
    })
  }

  deleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow })
  }

  render() {

    let persons = null;

    

    if(this.state.showPersons){
      persons = 
          <Persons 
            persons = {this.state.persons}
            clicked={this.deleteHandler}
            changed = {this.nameChangeHandler}
          />
    }

   

    return (
      // <StyleRoot>
      <div className={classes.App}>
        
        <Cockpit 
        
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        clicked={this.togglePersonHandler} />

        {persons}
        
        </div>
      // </StyleRoot>
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


