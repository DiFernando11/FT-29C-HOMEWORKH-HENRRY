import React from "react";
import "../styles/Card.modules.css";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  //console.log(cardStyle , "emvop");
  return (
    <div className="containerCard">
      <button onClick={onClose}> X </button>
      <h2>{name}</h2>
      <div className="containerIformation">
        <p>
          <b>Min</b> <p>{min}</p>
        </p>
        <p>
          <b>Max</b> <p>{max}</p>
        </p>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={img} />
      </div>
    </div>
  );
}
