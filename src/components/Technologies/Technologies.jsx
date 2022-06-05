import React from 'react';
import { Container, TechCard, Techs } from './styles';

import htmlImg from '../../assets/html5.png';
import cssImg from '../../assets/css3.png';
import jsImg from '../../assets/js.png';


export function Technologies() {
  return (
    <Container id="technologies">
      <div className="techTitle">
        <span>&lt;</span>
        <h2>Tecnologias</h2>
        <span>&gt;</span>
      </div>
      <Techs>
        <TechCard>
          <img src={htmlImg} alt="html5 logo" />
          <span>HTML5</span>
        </TechCard>
        <TechCard>
          <img src={cssImg} alt="html5 logo" />
          <span>CSS3</span>
        </TechCard>
        <TechCard>
          <img src={jsImg} alt="html5 logo" id="jsImg" />
          <span>JavaScript</span>
        </TechCard>
      </Techs>

    </Container>
  );
};