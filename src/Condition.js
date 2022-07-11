import React, { useState } from "react";
import ReactDOM from "react-dom";

function Condition() {
  const [num, setNum] = useState(0);
  const handleNum = (e) => {
    setNum(e.target.value);
  };
  return (
    <div>
      <input value={num} onChange={handleNum} />
      {num % 2 === 0 ? <h2>Even</h2> : <h2>Odd</h2>}
    </div>
  );
}

export default Condition;
