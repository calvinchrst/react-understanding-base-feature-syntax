import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Fragment>
        {
          <p>
            {this.context.isAuthenticated ? "Authenticated" : "Please log in"}
          </p>
        }
        <p onClick={this.props.clicked}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          // ref={(inputElement) => {     // Old way of setting up reference
          //   this.inputElementRef = inputElement;
          // }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

Person.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default withClass(Person, classes.Person);
