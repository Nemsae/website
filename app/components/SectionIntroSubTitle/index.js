import NormalH3 from 'components/H3';
// import styled from 'styled-components';

const SectionIntroSubTitle = NormalH3.extend.attrs({ className: 'section-intro__sub-title' })`
  max-width: 22.5rem;

  position: relative;

  line-height: 1.4;

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
