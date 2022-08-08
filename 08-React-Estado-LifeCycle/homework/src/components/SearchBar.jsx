import { useState } from "react";
import "../styles/SearchBar.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  //console.log(props);
  const [inputValueCity, setInputValueCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(inputValueCity);
        setInputValueCity("");
      }}
    >
      <input
        className="inputCitys"
        type="text"
        placeholder="Ciudad..."
        value={inputValueCity}
        onChange={(e) => setInputValueCity(e.target.value)}
      />
      <input className="addCitys" type="submit" value="Agregar" />
    </form>
  );
}
