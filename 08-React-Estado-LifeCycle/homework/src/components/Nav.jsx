import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "../styles/Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="barNavigation">
      <img src={Logo} alt="logo Henrry" />
      <ul className="containerHeaderNav">
        <li>Henrry</li>
        <li>Weather App -</li>
        <li>
          <a href="https://github.com/">Linkedin</a>
          <i className="bi bi-linkedin"></i>
        </li>
        <li>
          <a href="https://github.com/">GitHub</a>
          <i className="bi bi-github"></i>
        </li>
      </ul>
      <div className="containerSearchBar">
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
