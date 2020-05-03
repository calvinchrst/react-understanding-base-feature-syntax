import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 20 },
      { name: "Marta", age: 29 },
      { name: "Calvin", age: 24 },
    ],
    showPersons: false,
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Maximillian", age: 20 },
        { name: "Marta", age: 29 },
        { name: "Calvin", age: 25 },
      ],
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 20 },
        { name: event.target.value, age: 29 },
        { name: "Calvin", age: 24 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // Make a copy of the persons array instead of just having a reference/pointer to original array
    // because we don't want to edit original array outside of setState
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello Everyone!</h1>
        <p>This is really working!</p>
        <button style={this.style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        <button style={this.style} onClick={this.switchNameHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
