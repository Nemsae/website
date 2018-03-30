import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  h1 {
    font-family: 'Montserrat', 'Open Sans', Helvetica, Arial, sans-serif;
  }

  body {
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Raleway', 'Open Sans', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
