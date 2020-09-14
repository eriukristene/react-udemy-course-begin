import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  // state is a property of a class
  // can only access and change state in extended components, not functional componentss
  state = {
    username: 'supermax'
  }

  // if you plan to use the this keyword inside the method, you should use this syntax
  // where you have a property and assign a function
  // this will encapsulate the this keyword to refer to the class
  usernameChangedHandler = (event) => {
    // will merge whatever changes with the state via the setState() method
    // will check and update the DOM if need be
    // target refers to the element the event occured on
    // value is the property we may access (in this case, value entered into the input element)
    this.setState({username: event.target.value});
  }

  // if you use this syntax for a method, the this keyword GENERALLY refers to the class
  // but if this ends up being an event listener/handler (which render is not) but if it does,
  // using the this keyword won't work in JS with this syntax 12:41 in Section 50
  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserInput 
          changed={this.usernameChangedHandler} 
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" />
      </div>
    );
  }
}

export default App;
