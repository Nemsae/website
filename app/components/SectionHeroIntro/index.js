import styled from 'styled-components';

const SectionHeroIntro = styled.div.attrs({ className: 'section-hero__intro' })`
  height: 100%;
  width: 100%;
  max-width: 60rem;
  padding-top: 6rem;
  padding-left: 10rem;

  align-self: flex-start;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default SectionHeroIntro;
