import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Gleycy Kelly Costa Advocacia — Todos os direitos reservados.
      </p>
      <a
        href="https://wa.me/5541999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-whatsapp"
      >
        💬 Fale conosco
      </a>
    </footer>
  );
}
