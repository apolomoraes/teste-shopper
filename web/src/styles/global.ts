import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  }

  body::before {
    content: '';
    width: 100%;
    height: 43.6rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, 
  a:hover {
    filter: brightness(0.9);
  }
`;