import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 62.5%;
    font-weight: 400;
  }

  h1 {
    font-family: 'Montserrat', 'Open Sans', Helvetica, Arial, sans-serif;
  }

  body {
    font-family: 'Raleway', 'Open Sans', Helvetica, Arial, sans-serif;
  }

  ${'' /* body.fontLoaded {
    font-family: 'Raleway', 'Open Sans', Helvetica, Arial, sans-serif;
  } */}

  #app {
    background-color: #f6f9fc;
    ${''/* background-color: #fafafa; */}
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  a {
    color: pink;
    text-decoration: none;

    :visited {
      color: pink;
    }
    :hover {
      background-color: pink;
      color: white;
    }
  }

  //  NOTE: BLUE FLASH override
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  .px-30 {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
  .ml-auto, .mx-auto {
    margin-left: auto !important;
  }
  .mr-auto, .mx-auto {
    margin-right: auto !important;
  }

  ${'' /* .route-fade-enter
  .route-fade-enter-active
  .route-fade-enter-done */}
  ${'' /* .route-fade-enter {
    opacity: 0.01;
  }
  .route-fade-enter-active {
    opacity: 1;
    transition: opacity 3000ms ease-in;
  }
  .route-fade-exit {
    opacity: 1;
  }
  .route-fade-exit-active {
    opacity: 0.01;
    transition: opacity 3000ms ease-in;
  } */}

  :root {
    --ease-in-quad: cubic-bezier(.55, .085, .68, .53);
    --ease-in-cubic: cubic-bezier(.550, .055, .675, .19);
    --ease-in-quart: cubic-bezier(.895, .03, .685, .22);
    --ease-in-quint: cubic-bezier(.755, .05, .855, .06);
    --ease-in-expo: cubic-bezier(.95, .05, .795, .035);
    --ease-in-circ: cubic-bezier(.6, .04, .98, .335);

    --ease-out-quad: cubic-bezier(.25, .46, .45, .94);
    --ease-out-cubic: cubic-bezier(.215, .61, .355, 1);
    --ease-out-quart: cubic-bezier(.165, .84, .44, 1);
    --ease-out-quint: cubic-bezier(.23, 1, .32, 1);
    --ease-out-expo: cubic-bezier(.19, 1, .22, 1);
    --ease-out-circ: cubic-bezier(.075, .82, .165, 1);

    --ease-in-out-quad: cubic-bezier(.455, .03, .515, .955);
    --ease-in-out-cubic: cubic-bezier(.645, .045, .355, 1);
    --ease-in-out-quart: cubic-bezier(.77, 0, .175, 1);
    --ease-in-out-quint: cubic-bezier(.86, 0, .07, 1);
    --ease-in-out-expo: cubic-bezier(1, 0, 0, 1);
    --ease-in-out-circ: cubic-bezier(.785, .135, .15, .86);
  }
`;
