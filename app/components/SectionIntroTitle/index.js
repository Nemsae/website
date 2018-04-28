import styled from 'styled-components';

const SectionIntroTitle = styled.h2.attrs({ className: 'section-intro__title' })`
  font-size: 8rem;
  line-height: 0.9;
  letter-spacing: -.01em;

  margin-bottom: 12rem;

  b {
    font-weight: 100;
    font-family: "raleway", sans-serif;
  }
`;

export default SectionIntroTitle;
