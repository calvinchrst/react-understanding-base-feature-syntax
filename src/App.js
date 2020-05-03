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

  style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  render() {
    return (
      <div className="App">
        <h1>Hello Everyone!</h1>
        <p>This is really working!</p>
        <button style={this.style} onClick={this.switchNameHandler}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          change={this.changeNameHandler}
        >
          My hobby is sleeping :p
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
