import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footerPage">
      <span>Created by: Diego Apolo </span>
      <ul>
        <li>
          <a href="https://github.com/">Linkedin</a>
          <i className="bi bi-linkedin"></i>
        </li>
        <li>
          <a href="https://github.com/">GitHub</a>
          <i className="bi bi-github"></i>
        </li>
        <li>Cohorte: 29FT-C</li>
      </ul>
    </footer>
  );
}

export default Footer;
