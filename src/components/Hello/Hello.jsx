import React from 'react';
import { Container } from './styles';

export function Hello() {
  return(
    <Container>
      <div className="helloText">
        <span>Olá, meu nome é</span>
        <div className="myName">
          <h2>Diego&nbsp;</h2>
          <h2>Nacif</h2>
        </div>
        <span>Desenvolvedor <b>Front-End</b></span>
        <div className="buttons">
          <button>DOWNLOAD CV</button>
          <button>CONTATO</button>
        </div>
      </div>
    </Container>
  );
}