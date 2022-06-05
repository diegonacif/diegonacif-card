import React from "react";
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <a href="#home">
        <div className="myName">
          <span>&lt;</span>
          <h1>Diego Nacif</h1>
          <span>&gt;</span>
        </div>
      </a>
      <div className="menus">
        <a href="#about"><span>Sobre</span></a>
        <a href="#projects"><span>Projetos</span></a>
        <a href="#technologies"><span>Tecnologias</span></a>
        <a href="#contact"><span>Contato</span></a>
      </div>  
    </Container>  
  );
}