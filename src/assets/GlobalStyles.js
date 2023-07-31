import { createGlobalStyle } from 'styled-components';

export const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  img {
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  li {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }
`;

export const GlobalStyle = () => {
  return <StyledGlobalStyle />;
};
