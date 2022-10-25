import React from 'react';
import { Container } from './styles';

export function AboutMe() {
  // Cálculo de idade
  const timeNow = new Date();
  const birth = new Date(1988, 7, 27);
  const age = convertMill(timeNow - birth);

  function convertMill (mSeconds) {
    var checkYear = Math.floor(mSeconds / 31536000000);
    return checkYear;
  }

  return (
    <Container id="about">
      <section>
        <div className="aboutMe">
          <span>&lt;</span>
          <h2>Sobre mim</h2>
          <span>&gt;</span>
        </div>
        <div className="aboutMeText">
          <p>Sou desenvolvedor Front-End buscando minha primeira oportunidade na área.</p>
          <p>Nascido em Belém, tenho {age} anos. Sou apaixonado por tecnologia e tudo que envolve o mundo digital.</p>
        </div>
      </section>
      <div className="myPhoto" />
    </Container>
  );
};