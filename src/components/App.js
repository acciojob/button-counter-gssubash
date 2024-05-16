
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((val) => val + 1);
  }
  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={inc}>Click me</button>
    </div>
  );
}

export default App
