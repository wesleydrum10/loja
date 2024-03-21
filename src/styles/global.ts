import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

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
  .loading::after {
        display: block;
        content: "";
        position: relative;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        
        background: linear-gradient(90deg, transparent,
                rgba(255, 255, 255, 0.9), transparent);
   
        /* Adding animation */
        animation: loading 0.8s infinite;
    }
   
    /* Loading Animation */
    @keyframes loading {
        100% {
            transform: translateX(100%);
        }
    }
`;
