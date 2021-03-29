import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Condition1 extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return this.state.isLoggedIn ? (
      <button className="btn btn-success btn-sm m-2">Login</button>
    ) : (
      <button className="btn btn-warning btn-sm m-2">Logout</button>
    );
  }
}

export default Condition1;
