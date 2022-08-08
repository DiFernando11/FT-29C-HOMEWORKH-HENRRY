import React from "react";
import Card from "./Card";
import "../styles/Cards.modules.css";
export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  if (cities) {
    return (
      <div className="cardsContainer">
        {cities.map((city) => {
          return (
            <Card
              key={city.id++}
              max={city.max}
              min={city.min}
              name={city.name}
              img={city.img}
              onClose={() => onClose(city.id)}
            />
          );
        })}
      </div>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
}
