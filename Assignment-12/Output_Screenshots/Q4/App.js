import React, { Component } from "react";

class DebugComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello, debug!" };
  }

  render() {
    return (
      <div className='App'>
        <h1>{this.state.message}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default DebugComponent;
