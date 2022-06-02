import React from "react";
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div className="myName">
        <span>&lt;</span>
        <h1>Diego Nacif</h1>
        <span>&gt;</span>
      </div>
      <div className="menus">
        <span>Sobre</span>
        <span>Projetos</span>
        <span>Tecnologias</span>
        <button>Contato</button>
      </div>  
    </Container>  
  );
}