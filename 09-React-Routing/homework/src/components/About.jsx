import React from "react";
import "../styles/About.css";
import logoJs from "../img/logoJavascript.png";
import logoHtml from "../img/logoHtml.png";
import logoReact from "../img/logoReact.png";
import logoCss from "../img/logoCss.png";

function About() {
  return (
    <main className="mainPageAbout">
      <h2>Single Aplicattion</h2>
      <h4>Information :</h4>
      <p className="parraphPrincipal">
        Web application, in which you can search for your city or many others
        and consult the current weather check the current weather, you can move
        through the different sections of the page. sections of the page.
      </p>
      <img
        className="imagePageAboutWeatherApp"
        src="https://svgsilh.com/svg_v2/47579.svg"
        alt=""
      />
      <p>Consult Api: Weather API.</p>
      <p>
        Used Technologies: Javascript, Html, Css, React, Webpack, Babel, Node
        Js.
      </p>
      <ul>
        <li>
          <img src={logoHtml} alt="logo Page About HTML" />
        </li>
        <li>
          <img src={logoCss} alt="logo Page About CSS" />
        </li>
        <li>
          <img src={logoJs} alt="logo Page About JavaScript" />
        </li>
        <li>
          <img src={logoReact} alt="logo Page About React" />
        </li>
      </ul>
    </main>
  );
}

export { About };
