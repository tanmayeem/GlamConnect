import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Playfair Display', serif;
    background-color: #F3F3F3;
    color: #333;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #AC1212; /* Deep Red */
  }

  a:hover {
    color: #DC901E; /* Copper & Gold */
  }

  .hero {
    background-color: #180404; /* Licorice */
    color: #EEE; /* Light Grey */
  }
`;

export default GlobalStyle;
