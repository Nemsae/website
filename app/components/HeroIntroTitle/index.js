import styled from 'styled-components';

const HeroIntroTitle = styled.h2.attrs({ className: 'hero__intro-title' })`
  line-height: 0.9;
  letter-spacing: -.01em;
  text-transform: lowercase;
  font-size: 8rem;
${'' /* padding-top: 10rem; */}

  border-top: 2px solid #000;
  margin: 0;
  font-size: 15vw;
  padding: 10rem 0;

  b {
    font-weight: 100;
  }
`;

export default HeroIntroTitle;
