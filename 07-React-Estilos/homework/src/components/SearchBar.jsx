import React from "react";
import "../styles/SearchBar.css"

export default function SearchBar(props) {
  // acá va tu código
  console.log(props);
  return (
    <>
      <h2 className="titleAddCitys">Agrega una Ciudad</h2>
      <input className="inputCitys" type="text" placeholder="Ciudad..." />
      <button className="addCitys" onClick={() => props.onSearch("Diego")}> Agregar</button>
    </>
  );
}
