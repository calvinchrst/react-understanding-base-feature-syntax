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
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} />;
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
