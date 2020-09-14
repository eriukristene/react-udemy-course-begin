import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bojack Horseman', age: 28 },
      { name: 'Mr. Peanutbutter', age: 29 },
      { name: 'Princess Carolyn', age: 26 }
    ],
    otherState: 'some other value'
  };

  // here we are assigning a function to a property
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Mr. Peanutbutter', age: 29 },
        { name: 'Princess Carolyn', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Todd Chavez', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Princess Carolyn', age: 27 }
      ]
    });
  };

//render() { // NB! always need to render some HTML to the DOM
  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
      // can only return one root element, in this case, div  
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
            style={style} 
            onClick={() => this.switchNameHandler('Pickles Aplenty')}>Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // preferred syntax here with bind, passing method references b/t componenets #47
          click={this.switchNameHandler.bind(this, 'Diane Nguyen')}
          changed={this.nameChangedHandler}
        >
          What is this, a crossover episode?
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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