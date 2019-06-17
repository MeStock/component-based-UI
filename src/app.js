import React from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

import "../design/styles/app.scss";

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

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
