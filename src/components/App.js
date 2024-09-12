
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [cnt, setCount] = useState(0);

  const inc = () => {
    setCount(c=>c+1); 
  }
  return (
    <div>
      <p>Button clicked {cnt} times</p>
      <button onClick={inc}>Click me</button>
    </div>
  );
}

export default App
