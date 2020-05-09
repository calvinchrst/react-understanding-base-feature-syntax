import React, { useEffect, useRef } from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  // We can have as many useEffect as we want
  // The last argument in useEffect is the dependencies where if this dependency change, then only useEffect clean up & useEffect will be triggered.
  // An important use case of this is when you set No Dependencies =>
  //    useEffect will only run once when this Cockpit is created
  //    useEffect cleanup will only run once when this Cockpit is deleted

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");

    // // Http request...
    // setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);

    toggleBtnRef.current.click();

    return () => {
      // This runs BEFORE the main useEffect function runs but AFTER the first render cycle
      console.log("[Cockpit.js] clean up work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");

    return () => {
      // This runs BEFORE the main useEffect function runs but AFTER the first render cycle
      console.log("[Cockpit.js] clean up work in 2nd useEffect");
    };
  }, []);

  console.log("[Cockpit.js] Rendering...");

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
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
