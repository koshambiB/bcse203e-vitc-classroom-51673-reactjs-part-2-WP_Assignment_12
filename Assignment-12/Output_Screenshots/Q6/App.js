import React from "react";

function ChildComponent(props) {
  return <h2>Child Received: {props.message}</h2>;
}

function ParentComponent() {
  return (
    <div className='App'>
      <ChildComponent message="Hello from Parent!" />
    </div>
  );
}

export default ParentComponent;
