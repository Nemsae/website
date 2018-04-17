import styled from 'styled-components';

const SectionContent = styled.div.attrs({ className: 'section-content' })`
  width: 100%;
  max-width: 460px;

  position: relative;

  display: flex;
  flex-direction: column;

  margin-bottom: 16rem;

  &.offset {
    text-align: right;

    .section-icon {
      left: auto;
      right: -8.7rem;
    }
  }
`;

export default SectionContent;
