import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow-y: hidden;
    display: grid;
    grid-template-areas: 'header', 'main', 'footer';
    grid-template-rows: 10vh, 70vh, 1vh;
  }

  body, input, button {
    font-family: 'Ruda', sans-serif;
  }

  button, a {
    cursor: pointer;
  }
`;
