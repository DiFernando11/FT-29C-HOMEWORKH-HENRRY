import React from "react";
import "../styles/City.css";
// import { useParams } from "react-router-dom";
// let params = useParams();

function City({ city }) {
  if (!city) {
    return <span> Lo sentimos La ciudad no existe</span>;
  }

  return (
    <main className="mainPageCityInformation">
        <h2 class="loading wave">{city.name}</h2>
      <div className="containerCardMoreIformation">
        <ul>
          <li> Temperatura: {city.temp} °C</li>
          <li>Clima: {city.weather}</li>
          <li>Viento: {city.wind} km/h</li>
          <li>Cantidad de Nubes: {city.clouds}</li>
          <li>Latitud: {city.latitud}°</li>
          <li>Longitud: {city.longitud}°</li>
        </ul>
      </div>
      <img
        src="https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160911768/62901941-nube-blanca-de-dibujos-animados-con-la-cara-feliz-expresi%C3%B3n-ilustraci%C3%B3n-vectorial.jpg"
        alt=""
      />
    </main>
  );
}

export default City;
