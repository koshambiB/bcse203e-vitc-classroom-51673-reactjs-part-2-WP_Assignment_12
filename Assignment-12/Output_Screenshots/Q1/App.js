import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Alice" };
  }

  render() {
    return (
      <div className='App'>
        <h1>Welcome, {this.state.name}!</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default Welcome;

