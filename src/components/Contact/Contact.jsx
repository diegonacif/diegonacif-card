import React from 'react';
import { Container } from './styles';

export function Contact() {
  return (
    <Container id="contact">
      <section id="leftSection">
        <div className="contactTitle">
          <span>&lt;</span>
          <h2>Contato</h2>
          <span>&gt;</span>
        </div>
        <div className="contactText">
          Entre em contato comigo através dos links abaixo ou preencha os campos ao lado.
        </div>
        <div className="contactIcons">
          <h3>Icons</h3>
        </div>
      </section>

      <section id="rightSection">
        <div className="inputWp">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />
        </div>
        <div className="inputWp">
          <label htmlFor="mail">Email</label>
          <input type="text" id="mail" />
        </div>
        <div className="inputWp">
          <label htmlFor="message">Mensagem</label>
          <textarea name="message" id="message" cols="30" rows="6"></textarea>
        </div>
        <button>ENVIAR</button>
      </section>
    </Container>
  );
};