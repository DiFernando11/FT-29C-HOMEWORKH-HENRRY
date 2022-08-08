import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";

function App() {
  const [cities, setCities] = useState([]);
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
  function onSearch(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.main !== undefined) {
          const city = {
            min: Math.round(json.main.temp_min),
            max: Math.round(json.main.temp_max),
            img: json.weather[0].icon,
            id: json.id,
            wind: json.wind.speed,
            temp: json.main.temp,
            name: json.name,
            weather: json.weather[0].icon,
            clouds: json.clouds.all,
            latitud: json.coord.lat,
            longitud: json.coord.lon,
          };
          const deleteDuplicatedCities = cities.filter(
            (element) => element.name !== city.name
          );
          setCities([...deleteDuplicatedCities, city]);
          console.log(cities);
        } else {
          alert("Ciudad no encontrada");
        }
      })
      .catch((e) => console.log(e));
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <hr />
      <Cards cities={cities} onClose={onClose} />
      <hr />
    </div>
  );
}

export default App;
