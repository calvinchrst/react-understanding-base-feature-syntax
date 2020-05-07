import React from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignedClasses = [];
  if (props.nrOfPersons <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.nrOfPersons <= 1) {
    assignedClasses.push(classes.bold);
  }

  let btnClass = [];
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hello Everyone!</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
