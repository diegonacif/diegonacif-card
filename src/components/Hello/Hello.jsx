import { Container, Rotate } from './styles';

import sofiArt from '../../assets/sofiasArt-removebg.png';
import reactLogo from '../../assets/react-logo.png';
import jsLogo from '../../assets/js-round-logo.png';
import htmlLogo from '../../assets/html5-logo.png';
import cssLogo from '../../assets/css3-logo.png';
import sassLogo from '../../assets/sass-logo.png';

export function Hello() {
  const cvUrl = 'https://drive.google.com/file/d/1oH0SgksL8lIz5LlPOAkbb335StbjRR1C/view?usp=share_link';
  const githubUrl = 'https://github.com/diegonacif';

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
          <button onClick={() => window.open(cvUrl)}>DOWNLOAD CV</button>
          <button onClick={() => window.open(githubUrl)}>GITHUB</button>
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
          <div className="cssBg">
            <img src={cssLogo} alt="css logo" />
          </div>
          <div className="jsBg">
            <img src={jsLogo} alt="javascript logo" />
          </div>
          <div className="htmlBg">
            <img src={htmlLogo} alt="javascript logo" />
          </div>
          <div className="sassBg">
            <img src={sassLogo} alt="sass logo" />
          </div>
          
        </div>
      </div>
    </Container>
  );
}