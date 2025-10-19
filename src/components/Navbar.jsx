import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo Gleycy Kelly Costa Advocacia"
          className="navbar-logo"
        />
        <span className="navbar-text">Gleycy Kelly Costa Advocacia</span>
      </div>

      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {["home","sobre","atuacao","contato"].map(id => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={e => {
                  e.preventDefault();
                  document.querySelector(`#${id}`).scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
              >
                {id === "home" ? "Início" :
                id === "sobre" ? "Sobre" :
                id === "atuacao" ? "Atuação" : "Contato"}
              </a>
            </li>
          ))}
        </ul>
        <a href="tel:+5541999999999" className="ligue-btn">
          LIGUE: (41) 9 9999-9999
        </a>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}
