import React, { Component } from "react";

import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Auxiliary from "../hoc/Auxiliary";
import withClass from "../hoc/withClass";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "asdsad12", name: "Max", age: 20 },
      { id: "aet82", name: "Marta", age: 29 },
      { id: "apu79g", name: "Calvin", age: 24 },
    ],
    showPersons: false,
    showCockpit: true,
    counter: 0,
    isAuthenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate");
    console.log(snapshot);
  }

  authenticateHandler = () => {
    this.setState({
      isAuthenticated: true,
    });
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        counter: prevState.counter + 1,
      };
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

  render() {
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}
        />
      );
    }

    return (
      <Auxiliary>
        <button
          onClick={() => {
            this.setState({
              showCockpit: false,
            });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            isAuthenticated: this.state.isAuthenticated,
            authenticateHandler: this.authenticateHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              clicked={this.togglePersonsHandler}
              nrOfPersons={this.state.persons.length}
              showPersons={this.state.showPersons}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);
