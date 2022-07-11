import React from "react";
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  function increment() {
    setCount((count = count + 1));
  }
  function decrement() {
    setCount((count = count - 1));
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Counter;
