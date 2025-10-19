import React from "react";
import direitoImg from "../assets/direito-bg.png";

export default function Sobre() {
  return (
    <section id="sobre" className="sobre fade-section">
      <div className="sobre-container">
        {/* Bloco de texto */}
        <div className="sobre-texto">
          <h2>Sobre</h2>
          <p>
            O escritório <strong>Gleycy Kelly Costa Advocacia</strong> atua com
            ética, compromisso e excelência, proporcionando segurança e confiança
            aos seus clientes.
          </p>

          <p>
            Com foco em <span className="highlight">Direito Penal</span>, o
            escritório busca soluções eficazes e humanizadas, pautadas pela
            transparência, respeito e dedicação em cada caso.
          </p>

          <p>
            Nosso objetivo é garantir uma defesa técnica de qualidade,
            respeitando os princípios da justiça e assegurando os direitos de
            cada pessoa que confia em nosso trabalho.
          </p>
        </div>

        {/* Bloco da imagem */}
        <div className="sobre-imagem">
          <img
            src={direitoImg}
            alt="Imagem que remete ao Direito"
            className="sobre-foto"
          />
        </div>
      </div>
    </section>
  );
}
