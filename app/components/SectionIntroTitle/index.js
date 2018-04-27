import styled from 'styled-components';

const SectionIntroTitle = styled.h2.attrs({ className: 'section__intro-title' })`
  ${'' /* font-family: ''; */}
  font-size: 8rem;
  line-height: 7.2rem;
  letter-spacing: -.01em;

  margin-bottom: 12rem;

  b {
    font-weight: 100;
    font-family: "raleway", sans-serif;
  }
`;

export default SectionIntroTitle;
