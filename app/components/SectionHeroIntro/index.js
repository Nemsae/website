import styled from 'styled-components';

const SectionHeroIntro = styled.div.attrs({ className: 'section-hero__intro' })`
  max-width: 60rem;
  margin-top: 6rem;
  height: calc(100% - 6rem);
  margin-left: 10rem;
  width: 100%;
  border-top: 2px solid #000;

  align-self: flex-start;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default SectionHeroIntro;
