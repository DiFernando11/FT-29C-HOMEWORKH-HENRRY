import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="barNavigation">
      <Link to="/">
        <img src={Logo} alt="logo Henrry" />
      </Link>
      <Link to="/">
        <ul className="containerHeaderNav">
          <li className="deleteItemNavMobile">Henrry</li>
          <li className="deleteItemNavMobile">Weather App -</li>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </Link>

      <div className="containerSearchBar">
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
