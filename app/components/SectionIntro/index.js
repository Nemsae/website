import styled from 'styled-components';

const SectionIntro = styled.div.attrs({ className: 'section-intro' })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.color-white {
    color: #fff;
  }
`;

export default SectionIntro;
