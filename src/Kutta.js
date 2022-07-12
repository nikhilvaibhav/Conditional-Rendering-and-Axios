import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useState } from "react";

function Kutta() {
  const [img, setImg] = useState("");
  const [billi, setBilli] = useState("");
  const handleKutta = async () => {
    await axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => setImg(response.data.message));
  };

  const handleBilli = async () => {
    await axios
      .get("https://catfact.ninja/fact")
      .then((response) => setBilli(response.data.fact));
  };

  return (
    <div>
      <h2>Kutta Kutta Kutta...</h2>
      <img src={img} alt="Videshi Kutta" />
      <button onClick={handleKutta}>Dekho Kutta</button>
      <h3>{billi}</h3>
      <button onClick={handleBilli}>Billi facts</button>
    </div>
  );
}

export default Kutta;
