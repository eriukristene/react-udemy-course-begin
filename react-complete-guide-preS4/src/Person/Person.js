// in its simplest form, a component is just a function that returns JSX
// use ES6

import React from 'react';
import './Person.css'

const person = (props) => {
    return ( 
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )   
};

export default person;