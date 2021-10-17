import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("PrevProps", prevProps);
    console.log("PrevSrops", prevState);
    if (prevProps.counter.value != this.props.counter.value) {
    }
  }
  componentWillUnmount() {
    console.log("Counter-Unmount");
  }

  render() {
    console.log("Counter-Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatcount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm"
        >
          +
        </button>

        <button
          disabled={this.props.counter.value == 0 ? true : false}
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatcount() {
    const { value } = this.props.counter;

    return value == 0 ? "Zero" : value;
  }
}

export default Counter;
