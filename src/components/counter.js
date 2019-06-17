import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCounter: 0
    };
  }

  handleIncrementButton = event => {
    event.preventDefault();
    const incrementCounter = this.state.clickCounter + 1;
    this.setState({ clickCounter: incrementCounter });
  };

  handleDecrementButton = event => {
    event.preventDefault();
    const decrementCounter = this.state.clickCounter - 1;
    this.setState({ clickCounter: decrementCounter });
  };

  render() {
    return (
      <div>
        <h4>{this.state.clickCounter}</h4>
        <a href="/" onClick={this.handleIncrementButton}>
          +
        </a>
        <a href="/" onClick={this.handleDecrementButton}>
          -
        </a>
      </div>
    );
  }
}

export default Counter;
