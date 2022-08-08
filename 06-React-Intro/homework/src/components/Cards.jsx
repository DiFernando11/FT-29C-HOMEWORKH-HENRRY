import React from "react";
import Card from "./Card";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {props.cities.map((city) => {
        return (
          <Card
          key={city.id}
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
          />
        );
      })}
    </div>
  );
}

// Este Componente nos va a servir para renderizar muchos Componentes `Cards`. Básicamente, este componente va a recibir un arreglo de `ciudades` (con todos sus datos), y va a crear un componente `Card` por cada ciudad, pasandole las props correspondientes.

// ![](./img/Cards.png)

// > Tip: Podés usar la función `map` y devolver un componente `Card` por cada elemento del arreglo. [Acá](https://es.reactjs.org/docs/lists-and-keys.html#rendering-multiple-components) un ejemplo de la documentación de React.
