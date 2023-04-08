import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  //console.log(time);
  const [Time, setTime] = React.useState(time);

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }
  // code for updating time automatically
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
