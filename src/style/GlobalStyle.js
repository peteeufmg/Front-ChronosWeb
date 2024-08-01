// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Body styling */
  body, html {
    font-family: 'Jura', sans-serif;
    display: flex;
    background-color: #262729;
    color: #333;
    line-height: 1;
    font-size: 16px;  /* 1rem = 16px */
  }

  /* Anchor styling */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* List styling */
  ul {
    list-style: none;
  }

  /* Button styling */
  button {
    font-family: inherit;
    cursor: pointer;
  }

  /* Additional global styles can go here */
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 1rem 0;
    font-weight: 600;
  }

  p {
    margin: 0 0 1rem 0;
  }
`;

export default GlobalStyle;
