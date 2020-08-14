import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'aaasa', name: 'Max', age: 28},
      {id: 'xasdd', name: 'Dec', age: 24},
      {id: 'ccasc', name: 'Steph', age: 26},
    ],
    showPersons: false
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 24},
        {name: 'Steph', age: 26}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style={
      backgroundColour: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, i) => {
            return <Person
                key={p.id}
                click={() => this.deletePersonHandler(i)}
                name={p.name} 
                age={p.age}/>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
