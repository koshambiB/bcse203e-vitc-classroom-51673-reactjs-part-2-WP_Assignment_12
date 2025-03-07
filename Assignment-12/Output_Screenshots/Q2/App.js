import React, { Component } from "react";

class DataFetcher extends Component {
  constructor() {
    super();
    this.state = { data: "Loading..." };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: "API Data Loaded!" });
    }, 2000);
  }

  componentDidUpdate() {
    console.log("Component Updated!");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    return (
      <div className='App'>
        <h2>{this.state.data}</h2>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default DataFetcher;
