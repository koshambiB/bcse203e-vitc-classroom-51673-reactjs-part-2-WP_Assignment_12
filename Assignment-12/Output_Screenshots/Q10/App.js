import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  return (
    <div className='App'>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default NameForm;
