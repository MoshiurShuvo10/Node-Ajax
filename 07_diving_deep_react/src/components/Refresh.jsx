import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class Refresh extends Component {
  constructor() {
    super();
    this.refreshNow = this.refreshNow.bind(this);
  }
  refreshNow = () => {
    console.log("this: " + this);
    this.forceUpdate();
  };
  render() {
    return (
      <div>
        <button
          onClick={this.refreshNow}
          className="btn btn-success btn-sm m-3"
        >
          Refresh
        </button>
        <h1>{Math.random().toFixed(2)}</h1>
      </div>
    );
  }
}

export default Refresh;
