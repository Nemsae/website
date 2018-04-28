import NormalH3 from 'components/H3';
// import styled from 'styled-components';

const SectionIntroSubTitle = NormalH3.extend.attrs({ className: 'section-intro__sub-title' })`
  // font-family: "raleway", sans-serif;

  max-width: 225px;

  position: relative;

  :before {
    content: "";
    width: 100%;
    height: .1rem;
    background-color: #282626;
    position: absolute;
    left: 0;
    top: -0.5rem;
  }
`;

export default SectionIntroSubTitle;
