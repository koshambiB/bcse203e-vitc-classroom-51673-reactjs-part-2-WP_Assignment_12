import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      <h1>Current Time: {time}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default Timer;
