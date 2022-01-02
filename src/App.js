import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  function clickHandler() {
    var newValue = counter + 1;
    setCounter(newValue);
  }

  console.log("clicked", counter);

  return (
    <div>
      <h1>Emoji-interpreter</h1>
      <button onClick={clickHandler}>Click here</button> {counter}
    </div>
  );
}
