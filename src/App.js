import React from "react";
import Counter from "./Counter";
import Condition from "./Condition";
import Kutta from "./Kutta";
import List from "./List";

function App() {
  const arr = ["nikhil", "pawan", "mithu", "mummy", "baap"];
  return <List arr={arr} />;
}

export default App;
