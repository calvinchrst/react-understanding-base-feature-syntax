import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Everyone!</h1>
        <p>This is really working!</p>
        <Person name="Max" age="20" />
        <Person name="Marta" age="29">
          My hobby is sleeping :p
        </Person>
        <Person name="Calvin" age="24" />
      </div>
    );
  }
}

export default App;
