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
    background-color: #f6f9fc;
    ${''/* background-color: #fafafa; */}
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  //  NOTE: BLUE FLASH override
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  .px-30 {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
  .py-30 {
    padding-bottom: 30px !important;
    padding-top: 30px !important;
  }
  .ml-auto, .mx-auto {
    margin-left: auto !important;
  }
  .mr-auto, .mx-auto {
    margin-right: auto !important;
  }
`;
