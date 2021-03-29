import React, { Component } from "react";
import ReactDOM from "react-dom";

class Demo extends Component {
  updateText = () => {
    var element = <h4>Shut up!</h4>;
    var helloContainer = document.getElementById("hello");
    var callback = () => {
      alert("callback called!!");
    };
    ReactDOM.render(element, helloContainer, callback);
  };
  render() {
    return (
      <div>
        <button
          onClick={this.updateText}
          className="btn btn-warning btn-sm m-4"
        >
          Click
        </button>
        <p id="hello">Hello</p>
      </div>
    );
  }
}

export default Demo;
