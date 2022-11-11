import { useState, useRef } from 'react';
import { Container } from './styles';

import { useOnClickOutside } from 'usehooks-ts' // Outside Click (Hook)

import { useTransition, animated } from '@react-spring/web'; // Conditional Rendering Transition Lib

import { Twirl as Hamburguer } from 'hamburger-react';  // Hamburguer Menu Button with Animation

export function MenuButton() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Outside Click (Variable)
  const refContainer = useRef(null);

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  }

  useOnClickOutside(refContainer, handleClickOutside)

  // Modal Animation
  const transitions = useTransition(isMenuOpen, {
    from: { x: 10, y: -10, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 10, y: -10, opacity: 0 },
    config: {duration: 200},
  });

  return (
    <Container 
      id="menu-button-container"
      ref={refContainer} // Outside Click (Reference)
    >
      <Hamburguer 
        toggled={isMenuOpen} 
        toggle={handleMenuOpen}
        size={30}
        duration={0.3}
        rounded
        label="abrir menu"
      />

      {
        transitions(
          (styles, item) => item &&
            <animated.section className="menu-modal" style={styles}>
              <div className="menu-item">
                <a href="#about">Sobre</a>
              </div>
              <div className="menu-item">
                <a href="#projects">Projetos</a>
              </div>
              <div className="menu-item">
                <a href="#technologies">Tecnologias</a>
              </div>
              <div className="menu-item">
                <a href="#contact">Contato</a>
              </div>
            </animated.section>
        )
      }

      
    </Container>
  );
};