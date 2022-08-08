import React from "react";
import "../styles/Card.modules.css";
import { Link } from "react-router-dom";

export default function Card({ max, min, name, img, onClose, id }) {
  // acá va tu código
  //console.log(cardStyle , "emvop");
  return (
    <div className="containerCard">
      <button onClick={onClose}> X </button>
      <Link to={`/${name}/${id}`}>
        <h2>{name}</h2>
        <div className="containerIformation">
          <p>
            <b>Min</b> <span>{min}°</span>
          </p>
          <p>
            <b>Max</b> <span>{max}°</span>
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt={img}
          />
        </div>
      </Link>
    </div>
  );
}
