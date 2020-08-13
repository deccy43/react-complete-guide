import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Dec', age: 24},
      {name: 'Steph', age: 26}
    ]
  }

  switchNameHandler = newName => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Dec', age: 24},
        {name: 'Steph', age: 27}
      ]
    })
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

  render() {
    const style={
      backgroundColour: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler('Dec!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Dec!!!!')}
          changed={this.nameChangedHandler}>I love coding!</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
