import styled from 'styled-components';

const SectionIntroWrapper = styled.div.attrs({ className: 'section-intro__wrapper' })`
  position: absolute;
  bottom: 1rem;

  ${'' /* .section-intro__title {
    font-size: 6rem;
  } */}

  .section-intro__sub-title::before {
    background-color: #fff;
  }
`;

export default SectionIntroWrapper;
