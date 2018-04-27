import styled from 'styled-components';

const SectionRow = styled.div.attrs({ className: 'section-row' })`
  width: 100%;
  max-width: 1280px;

  &.vh-100 {
    height: calc(100vh - 12rem);
  }

  margin: 6rem 0;
  padding: 0 10rem;

  position: relative;

  display: flex;
  flex-direction: column;

  .section-item + .section-item {
    margin-top: 12rem;
  }
`;

export default SectionRow;
