import React from "react";
import HTML5 from "../assets/HTML.png";
import CSS from "../assets/css.png";
import Java from "../assets/java.avif";
import Javascript from "../assets/javascript.png"; // Corrigido o nome da variável
import Mysql from "../assets/mysql.avif"; // Corrigido o caminho (provavelmente minúsculo)
import Reactweb from "../assets/react.png";
import Github from "../assets/github.png";

function Hero() {
  return (
    <section className="hero">
      <section>
        <h2>Olá, sou desenvolvedor web</h2>
        <p>Desenvolvo aplicações web completas, do front ao back-end, com foco em interfaces modernas e performance.</p>
        <h2>Habilidades</h2>
      </section>
      
          <section className="skills-grid">
            <div className="skill-item">
              <img src={HTML5} alt="HTML5" />
            </div>
            <div className="skill-item">
              <img src={CSS} alt="CSS" />
            </div>
            <div className="skill-item">
              <img src={Java} alt="Java" />
            </div>
            <div className="skill-item">
              <img src={Javascript} alt="JavaScript" />
            </div>
            <div className="skill-item">
              <img src={Mysql} alt="MySQL" />
            </div>
            <div className="skill-item">
              <img src={Reactweb} alt="React" />
            </div>
            <div className="skill-item">
              <img src={Github} alt="GitHub" />
            </div>
          </section>
    </section>
  );
}

export default Hero;