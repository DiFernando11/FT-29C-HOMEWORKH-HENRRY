import React from "react";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  return (
    <div>
      <button onClick={onClose}> X </button>
      <h1>{name}</h1>
      <p> Min {min}</p>
      <p> Max {max}</p>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={img} />
    </div>
  );
}
// Esta tarjeta va a mostrar el nombre de una ciudad, con su temperatura máxima y mínima, y con una imagen que representa el estado del clima (soleado, nublado, etc..), además cuando el usuario haga click en la X de cerrar, se invocará una función que tambien viene como props.

// ![](./img/WeatherCard.png)

// Este Componente va a recibir las siguientes props:
// - **max**: Temperatura Máxima.
// - **min**: Temperatura Mínima.
// - **name**: Nombre de la ciudad.
// - **img**: nombre de la imagen que se debe mostrar.
// - **onClose**: recibe una función que se va a ejecutar cuando el usuario haga click en el botón de cerrar.

// Todos estos datos van a venir de una API de clima, pero por ahora no nos interesa esa parte. Nosotros te vamos a dar datos de prueba para que puedas ver tu componente funcionando.

// __IMPORTANTE:__ Para poder obtener la imagen correspondiente desde la API del clima deben utilizar la siguiente URL `http://openweathermap.org/img/wn/${img}@2x.png` donde img debería ser el código del icono asociado a la imagen que recibe como prop. Por ejemplo: http://openweathermap.org/img/wn/02d@2x.png
