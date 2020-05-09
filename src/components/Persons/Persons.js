import React, { PureComponent } from "react";

import Person from "./Person/Person";

class Persons extends PureComponent {
  state = {
    test: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    // Run before components is removed from DOM
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          clicked={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          key={person.id}
        />
      );
    });
  }
}

export default Persons;
