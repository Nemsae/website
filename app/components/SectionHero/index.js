import styled from 'styled-components';

const SectionHero = styled.div.attrs({ className: 'section-hero' })`
  ${'' /* display: flex;
  align-items: center; */}

  &.color-black {
    color: var(--black);
  }
  &.color-white {
    color: var(--white);
  }
`;

export default SectionHero;
