import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// using hooks
const app = props => {
  // returns an array with two elements and always two elements
  // first element: always be our current state (the object)
  // second element: always be a function that allows us to update our state
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Bojack Horseman", age: 52},
      {name: "Mr. Peanutbutter", age: 47},
      {name: "Princess Carolyn", age: 45}
    ],
    // this will disappear with hooks when you update the state
    // with class based, it did NOT replace this piece when the state was updated
    // however if you update this using functional components, it WILL go away when state is updated
    // have to make sure you are manually including old state data
    otherState: 'some other value'  
  });

  const [otherState, setOtherState] = useState({otherState: 'some other value'});

  console.log(personsState, otherState);

  // here we are assigning a function to a property
  const switchNameHandler = () => {
    // console.log('was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Todd';
    setPersonsState({
      persons: [
        {name: "Pickles Aplenty", age: 22},
        {name: "Mr. Peanutbutter", age: 47},
        {name: "Princess Carolyn", age: 35} 
      ]
      
    });
  }

  //render() { // NB! always need to render some HTML to the DOM
    return (
      // can only return one root element, in this case, div
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>Hello!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>What is this, a crossover episode?</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
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
}
//} the end of the render() bracket

export default app;





  