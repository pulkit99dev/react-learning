import React from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {

    let btnClass = ' ';

    btnClass = classes.Red;


    let assignedClasses = [];
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red)
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
        <div className={classes.Cockpit}>
        <h1>React App</h1>
        <p className = {assignedClasses.join(' ')}> Testing dynamic styling</p>
        <button className={btnClass} onClick = {props.clicked} alt={props.showPersons} > Toggle cards </button>
        </div>
    );
}

export default cockpit;