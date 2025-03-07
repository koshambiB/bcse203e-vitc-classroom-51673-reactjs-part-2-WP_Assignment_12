import React, { Component } from "react";

class ForceUpdateExample extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className='App'>
        <h1>Current Time: {new Date().toLocaleTimeString()}</h1>
        <button onClick={() => this.forceUpdate()}>Update Time</button>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default ForceUpdateExample;
