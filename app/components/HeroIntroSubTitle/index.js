import styled from 'styled-components';

const HeroIntroSubTitle = styled.h4.attrs({ className: 'hero__intro-sub-title' })`
  line-height: 1.3;
  letter-spacing: -.01em;
  font-size: 2rem;
  font-weight: 100;
  margin: 0;

  border-top: 2px solid #000;
  padding: 2rem 0;
  max-width: 600px;

  padding-right: 28%;

  b {
    color: pink;
  }
`;

export default HeroIntroSubTitle;
