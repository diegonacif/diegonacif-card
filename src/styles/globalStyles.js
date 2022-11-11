import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root {
    --green: #3c735f;
    --yellow: #f2cb05;
    --orange: #f2a922;
    --orange-text: #b67c34;
    --blue: #4276E9;
    --blue-mirror: rgba(34, 95, 230, 0.97);
    --light-blue: #6c96f5;
    --red: #a62f26;
    --white: #dadada;
    --black: #141414;
    --black-mirror: rgba(30, 30, 30, 0.60);
    --gray: #1b1b1b;
    --gray-90: rgba(75, 75, 75, 0.9);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    font-family: Arial, Helvetica, sans-serif;

    -webkit-tap-highlight-color: transparent; // remove color highlight on tap
  }

  html {
    scroll-behavior: smooth;
  }

  .react-multi-carousel-list {
    width: 90%;
    height: 90%;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
 
export default GlobalStyle;