import styled from 'styled-components';

const SectionHero = styled.div.attrs({ className: 'section-hero' })`
  ${'' /* display: flex;
  align-items: center; */}

  &.color-black {
    color: #1B1819;
  }
  &.color-white {
    color: #fff;
  }
`;

export default SectionHero;
