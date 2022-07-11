import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useState } from "react";

function Kutta() {
  const [img, setImg] = useState("");
  const handleKutta = async () => {
    await axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => setImg(response.data.message));
  };

  return (
    <div>
      <h2>Kutta Kutta Kutta...</h2>
      <img src={img} alt="Videshi Kutta" />
      <button onClick={handleKutta}>Dekho Kutta</button>
    </div>
  );
}

export default Kutta;
