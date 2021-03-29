import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  }

  onChangeHandler = (event) => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value,
    });
    if (name === "firstname") {
      if (value === "khushnood")
        this.setState({ firstname: "This bitch can't sign in" });
    }
    if (name === "lastname") {
      if (value === "jahin") this.setState({ lastname: "Fuck off!!!" });
    }
  };
  render() {
    return (
      <div>
        <section>
          First Name: {this.state.firstname}
          <br />
          Last Name: {this.state.lastname}
          <br />
          Email: {this.state.email}
          <br />
          Password: {this.state.password}
        </section>
        <hr />
        <form>
          <input
            onChange={this.onChangeHandler}
            type="text"
            placeholder="first name"
            name="firstname"
          />
          <br />
          <br />
          <input
            onChange={this.onChangeHandler}
            type="text"
            placeholder="last name"
            name="lastname"
          />
          <br />
          <br />
          <input
            onChange={this.onChangeHandler}
            type="text"
            placeholder="email"
            name="email"
          />
          <br />
          <br />
          <input
            onChange={this.onChangeHandler}
            type="password"
            placeholder="password"
            name="password"
          />
          <br />
          <br />
          <input type="submit" value="submit" name="submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
