import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: this.props.counter.value,
    tags: [],
  };
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getCounterBadgeClasss() {
    let countBootstrapClass = "badge m-2 badge-";
    countBootstrapClass += this.state.count === 0 ? "warning" : "primary";
    return countBootstrapClass;
  }

  //   displayCart() {
  //     if (this.state.tags.length === 0)
  //       return <h6>Cart will be visible if something is added to it</h6>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("props: ", this.props.counter.value);
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm mt-2"
          onClick={this.handleDecrement}
        >
          Decrement
        </button>

        <span
          className={this.getCounterBadgeClasss()}
          value={this.props.counter.value}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-primary btn-sm mt-2"
        >
          Increment
        </button>
        {/* <br />
        {this.state .tags.length === 0 && "Cart is emtpy"}
        {this.displayCart()} */}

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
