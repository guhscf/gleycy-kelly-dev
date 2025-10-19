import React from "react";

export default function Contato() {
  return (
    <section className="page-content contato">
      <div className="contato-container">
        <h2>Contato</h2>
        <p>Entre em contato para agendar uma consulta ou tirar suas dúvidas.</p>

        <div className="contato-info">
          <p><strong>📍 Endereço:</strong> Curitiba - PR</p>
          <p><strong>📞 Telefone:</strong> (41) 9 9999-9999</p>
          <p><strong>✉️ E-mail:</strong> contato@gleycyadvocacia.com.br</p>

          <a
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            💬 Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
