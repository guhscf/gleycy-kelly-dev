import React from "react";
import logo from "../assets/logo_home.png";

export default function Home() {
  return (
    <div className="home">
      <img
        src={logo}
        alt="Logo Gleycy Kelly Costa Advocacia"
        className="home-logo"
      />

      <h1>ADVOCACIA E ASSESSORIA JURÍDICA ESPECIALIZADA</h1>

      <p>
        Advocacia especializada em <span className="highlight">Direito Cível</span>. Seja qual for o
        desafio que você esteja enfrentando, conosco você{" "}
        <strong>não estará sozinho</strong>. Nosso papel é{" "}
        <strong>proteger seus interesses</strong> e{" "}
        <strong>defender seus direitos</strong>.
      </p>

      <a
        href="https://wa.me/5541999999999"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 Me chame agora no WhatsApp
      </a>
    </div>
  );
}
