import React from 'react';
import { Container } from './styles';

export function AboutMe() {
  return (
    <Container>
      <section>
        <div className="aboutMe">
          <span>&lt;</span>
          <h2>Sobre mim</h2>
          <span>&gt;</span>
        </div>
        <div className="aboutMeText">
          <p>Sou desenvolvedor Front-End buscando minha primeira oportunidade na área.</p>
          <p>Nascido em Belém, tenho 33 anos. Sou apaixonado por tecnologia e tudo que envolve o mundo digital.</p>
        </div>
      </section>
      <div className="myPhoto" />
    </Container>
  );
};