import { Container } from './styles';

import { IconContext } from 'react-icons';
import { FaLinkedin, FaGithub, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import { IoLogoWhatsapp } from 'react-icons/io';

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
          Entre em contato comigo através dos links abaixo, que terei prazer em responder.
        </div>
        <div className="contactIcons">
          <IconContext.Provider value={{ className: "global-react-icons" }}>
            <FaLinkedin 
              onClick={() => window.open('https://www.linkedin.com/in/diego-nacif/')}
              title="LinkedIn"
            />
            <FaGithub 
              onClick={() => window.open('https://github.com/diegonacif')} 
              title="Github" 
            />
            <FaTelegram
              onClick={() => window.open('https://t.me/DiegoNacif')}
              title="Telegram"
            />
            <IoLogoWhatsapp 
              onClick={() => window.open('https://wa.me/5584991751476')}
              title="Whatsapp"
            />
            <ImMail 
              onClick={() => window.open('mailto:diegoreisnacif@gmail.com?subject="Contato LandingPage"')}
              title="Mail"
            />
          </IconContext.Provider>
        </div>
      </section>

      {/* <section id="rightSection">
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
      </section> */}
    </Container>
  );
};