import styled from 'styled-components';

const SectionHeroWrapper = styled.div.attrs({ className: 'section-hero__wrapper' })`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &.color-black {
    color: #000;
  }
  &.color-white {
    color: #fff;
  }
  &.jc-flex-start {
    justify-content: flex-start;
  }
`;

export default SectionHeroWrapper;
