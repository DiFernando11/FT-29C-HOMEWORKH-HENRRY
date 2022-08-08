import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import Cards from "./components/Cards.jsx";
import City from "./components/City";
import Footer from "./components/Footer.jsx";
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
  function onFilterCityInformation(cityId) {
    let city = cities.filter((c) => c.id === parseInt(cityId));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <hr />
      <Route
        exact
        path={"/"}
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route path="/about" render={() => <About />} />
      <Route
        path={"/:city/:id"}
        render={({ match }) => (
          <City city={onFilterCityInformation(match.params.id)} />
        )}
      />
      <hr />
      <Route path="/" render={() => <Footer />} />
    </div>
  );
}

export default App;
