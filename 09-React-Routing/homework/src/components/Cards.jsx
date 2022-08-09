import React from "react";
import Card from "./Card";
import "../styles/Cards.modules.css";
export default function Cards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  if (cities.length) {
    return (
      <main className="cardsContainer">
        {cities.map((city) => {
          return (
            <Card
              key={city.id}
              max={city.max}
              min={city.min}
              name={city.name}
              img={city.img}
              onClose={() => onClose(city.id)}
              id={city.id}
            />
          );
        })}
      </main>
    );
  } else {
    return (
      <>
        <p className="paraphNotCities">
          !Lo sentimos, No has Agregado una ciudad!
        </p>
        ;
        <figure className="containerimgNotCities">
          <img
            className="imgNotCities"
            src="https://previews.123rf.com/images/antimartina/antimartina1605/antimartina160500023/58384065-ilustraci%C3%B3n-vectorial-de-una-nube-de-lluvia-de-dibujos-animados-llorar.jpg"
            alt=""
          />
        </figure>
      </>
    );
  }
}
