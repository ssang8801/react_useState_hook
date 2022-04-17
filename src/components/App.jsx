import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function increaseRender() {
    setCount(count + 1);
  }
  function decreaseRender() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decreaseRender}>-</button>
      <button onClick={increaseRender}>+</button>
    </div>
  );
}

export default App;
