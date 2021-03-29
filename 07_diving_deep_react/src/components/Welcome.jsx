import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      welcomeName: "Default",
      name: "Paul Deitel",
      book: "Java: How to program",
      year: 1990,
      coAuthors: ["Harvey Deitel", "Harbert Schieldt"],
      address: {
        road: 30,
        city: "New York",
        country: "USA",
      },
    };
  }

  changeWelcomeNameHandler = (arg) => {
    this.setState({
      welcomeName: arg,
    });
  };
  render() {
    return (
      <div>
        <h2>WELCOME {this.state.welcomeName}</h2>
        <button
          className="btn btn-warning btn-sm m-4"
          onClick={this.changeWelcomeNameHandler.bind(this, "Custom")}
        >
          Change welcome name
        </button>
        <article>
          {`Title: ${this.state.book}
		                                Writer: ${this.state.name}
            Year of publication: ${this.state.year}
            Co-Authors: ${this.state.coAuthors}
                Road: ${this.state.address.road}
        city: ${this.state.address.city}
        country: ${this.state.address.country}`}
        </article>
      </div>
    );
  }
}

export default Welcome;
