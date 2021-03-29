import React, { Component } from "react";
class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  // form e name === state e name
  // handler e, nijer iccha moto..

  onChangeHandler = (event) => {
    var name = event.target.name;
    var value = event.target.value;

    this.setState({ [name]: value });
  };

  onsubmitHandler = () => {};
  render() {
    return (
      <div>
        <form onSubmit={this.onsubmitHandler}>
          <p>First form</p>
          <p>My name is {this.state.username}</p>
          <input
            onChange={this.onChangeHandler}
            type="text"
            name="username"
            placeholder="Enter name"
          />
          <input type="submit" Value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
