import React , {Component} from 'react';
import Person from './Person/Person';

// functional component for the presentation of content
// if we are only going to have 1 line return statement, don't need to use {}

// props contains an array of persons that we want to transform into a array of JSX elements

class Persons extends Component {
  render() {
    return this.props.persons.map((person, index) => {
      return (
      <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      )    
    });
  }
}


export default Persons;