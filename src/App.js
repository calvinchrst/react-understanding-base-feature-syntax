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

  render() {
    return (
      <div className="App">
        <h1>Hello Everyone!</h1>
        <p>This is really working!</p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
