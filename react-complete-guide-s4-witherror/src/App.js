import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'kdfvnd', name: 'Bojack Horseman', age: 28 },
      { id: 'fvkdf', name: 'Mr. Peanutbutter', age: 29 },
      { id: 'vfdkjvd', name: 'Princess Carolyn', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    // default JS method which helps us find the index of the element in the array
    // similar to map(), will execute this function on every element of the array
    // but not mapping this into something new
    const personIndex = this.state.persons.findIndex(p => {
      // is this the person I was looking for?
      return p.id === id;
    });

    // avoid mutating the state directly (the original persons array object)
    // by using the below syntax with a new object created
    // will fetch all the properties of the object and place into the new object
    const person =  {
      ...this.state.persons[personIndex]
    };

    // alternative syntax for the above code
    // const person = Object.assign{}, this.state.persons[personIndex];

    // can do this, because using the copy person and not the original
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: person});
  }

  deletePersonHandler = (personIndex) => {
    // create a copy of the persons array from state with slice()
    // const persons = this.state.persons.slice(); THIS IS ONE WAY TO COPY THE ARRAY
    // can also copy the array this way with spread operator
    // new array with objects from the old array but not the old array itself
    // the spread operator is the newer way of doing this
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    // update state with the new array
    this.setState({persons: persons});
    
    /* bad practice below
    // should create a copy of the persons array before manipulating it
    // not change the original array
    // the below way changes the actual original array from state

    const persons = this.state.persons;
    // remove 1 element from the array
    // mutating the original data here
    persons.splice(personIndex, 1);
    // set the state persons array to the updated const persons
    this.setState({persons: persons});
    */
  }

  // use this syntax here so we can use the this keyword
  // using this syntax with the this keyword will always ensure the this keyword
  // refers back to this class
  // we want this to toggle some property which decide if we want to show the persons or not
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});  
  }

//render() { // NB! always need to render some HTML to the DOM
  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };


    let persons = null;

    // will render the array of persons from state and map them to React components (Person)
    // mapping an array (from state) into an array with JSX elements
    // common way of outputing lists in React
    if (this.state.showPersons) {
       persons = (
            <div>
              {this.state.persons.map((person, index) => {
                return <Person
                  // use arrow syntax here so you can pass a function with a parameter
                  click={() => this.deletePersonHandler(index)} 
                  name={person.name} 
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)} />      
              })}
            </div> 
       ); 
    }

    // everything in this method gets executed when React re-renders this component
    return (
      // can only return one root element, in this case, div  
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
            style={style} 
            onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}        
      </div>
    );
    // Understanding JSX, at least three elements
    // the above code can also be written like it is down below
    // this shows why the above code is not HTML. the code above is much easier to use
    // 1 - the element you want to render
    // 2 - configuration (CSS classes for example)
    // 3 - renders h1 as text, not another element
    // 4 - content or text
    // if we want to render nested elements, must use another call to React.createElement
    // can see the tags if you view the page source
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'));
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;


// CLASS BASED COMPONENT SYNTAX: class App extends Component {
  // this only works in components that extend Component
  // class-based React components
  // managed from inside the component
  // use "state" with care, can get hard to manage
  // if we change the state, the DOM will update with the new info