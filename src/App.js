import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 20 },
      { name: "Marta", age: 29 },
      { name: "Calvin", age: 24 },
    ],
  });

  const [otherState, setOtherState] = useState("Just some other states");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Maximillian", age: 20 },
        { name: "Marta", age: 29 },
        { name: "Calvin", age: 25 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hello Everyone!</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My hobby is sleeping :p
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
