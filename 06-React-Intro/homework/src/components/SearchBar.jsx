import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  console.log(props);
  return (
    <>
      <h2>Agregar Pais</h2>
      <input type="text" />
      <button onClick={() => props.onSearch("Diego")}> Agregar</button>
    </>
  );
}

// Este componente se va a utilizarse para luego poder encontrar las ciudades sobre las cuales se desee ver el clima actual.

// ![](./img/SearchBar.png)

// Este Componente recibe por props una función `onSearch` que recibe un parámetro (que será el nombre de la ciudad tomado desde el input pero de momento pueden pasarle uno cualquiera ya que aún no estamos utilizando estados dentro del componente). La función `onSearch` se debe ejecutar cuando se haga click en el botón `Agregar`.
