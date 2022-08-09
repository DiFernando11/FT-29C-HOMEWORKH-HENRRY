import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="barNavigation">
      <NavLink exact to="/" activeClassName="imageHomeLogoHenrry">
        <img src={Logo} alt="logo Henrry" />
      </NavLink>
  
        <ul className="containerHeaderNav">
          <li className="deleteItemNavMobile">Henrry</li>
          <NavLink  exact to="/">
          <li className="deleteItemNavMobile">Weather App </li>
          </NavLink>
          <NavLink exact to="/about"  >
            <li>About</li>
          </NavLink>
        </ul>
   

      <div className="containerSearchBar">
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
