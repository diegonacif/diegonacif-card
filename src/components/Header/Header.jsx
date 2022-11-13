import { useEffect, useState } from "react";
import { Container } from './styles';
import { MenuButton }  from '../MenuButton/MenuButton';

export function Header() {

  const [isMobile, setMobile] = useState(window.innerWidth < 425);

  const updateMedia = () => {
    setMobile(window.innerWidth < 425);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [])

  return (
    <Container>
      <a href="#home">
        <div className="myName">
          <span>&lt;</span>
          <h1>Diego Nacif</h1>
          <span>&gt;</span>
        </div>
      </a>

      {isMobile ? (
        <MenuButton />
      ) : (
        <div className="menus">
          <a href="#about"><span>Sobre</span></a>
          <a href="#projects"><span>Projetos</span></a>
          <a href="#technologies"><span>Tecnologias</span></a>
          <a href="#contact"><span>Contato</span></a>
        </div>  
      )}
    </Container>  
  );
}