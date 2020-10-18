import React, { Component } from "react";

import classes from "./App.css";
import Person from "./Person/Person";


class App extends Component {
  state = {
    persons: [
      { id: "aaasa", name: "Max", age: 28 },
      { id: "xasdd", name: "Dec", age: 24 },
      { id: "ccasc", name: "Steph", age: 26 },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, i) => {
            return (
              <Person
                key={p.id}
                click={() => this.deletePersonHandler(i)}
                name={p.name}
                age={p.age}
                changed={(event) => this.nameChangedHandler(event, p.id)}
              />
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) assignedClasses.push(classes.red);
    if (this.state.persons.length <= 1) assignedClasses.push(classes.bold);

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
