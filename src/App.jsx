import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Atuacao from "./pages/Atuacao";
import Contato from "./pages/Contato";

export default function App() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");

    // sombra ao rolar
    const handleScroll = () => {
      if (window.scrollY > 10) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);

    // animação de entrada (fade + translate)
    const sections = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.25 }
    );
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="main-content">
        <section id="home" className="fade-section left">
          <Home />
        </section>

        <section id="sobre" className="fade-section right">
          <Sobre />
        </section>

        <section id="atuacao" className="fade-section left">
          <Atuacao />
        </section>

        <section id="contato" className="fade-section right">
          <Contato />
        </section>
      </main>
      <Footer />
    </>
  );
}
