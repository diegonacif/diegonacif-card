import React from 'react';
import { Container, Rotate } from './styles';

import sofiArt from '../../assets/sofiasArt-removebg.png';
import reactLogo from '../../assets/react-logo.png';

export function Hello() {
  return(
    <Container id="home">
      <div className="helloText" >
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
      <div className="artWp">
        <div id="blobBg">
          <img src={sofiArt} alt="Diego by Sofia" id="chibiImg" />
          <div className="reactBg">
            <Rotate>
              <img src={reactLogo} alt="react logo" id="reactLogo" />
            </Rotate>
          </div>
          <div className="cssBg">CSS</div>
          
        </div>
      </div>
    </Container>
  );
}