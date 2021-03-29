import React, { Component } from "react";
class Textarea extends Component {
  constructor() {
    super();
    this.state = {
      useroutput: "",
    };
  }
  onChangeHandler = (event) => {
    var userinputareavalue = event.target.value;
    this.setState({
      useroutput: userinputareavalue,
    });
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <textarea onChange={this.onChangeHandler} />
        <p>{this.state.useroutput}</p>
      </div>
    );
  }
}

export default Textarea;
