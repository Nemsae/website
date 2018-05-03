import styled from 'styled-components';

const SectionRow = styled.div.attrs({ className: 'section-row' })`
  width: 100%;
  max-width: 1280px;

  ${'' /* margin: 6rem 0; */}
  padding: 6rem 10rem 0;
  margin-bottom: 5rem;

  position: relative;

  display: flex;
  flex-direction: column;

  .section-item + .section-item {
    margin-top: 12rem;
  }

  &.vh-100 {
    height: 100vh;
  }
  &.no-padding {
    padding: 0;
  }
`;

export default SectionRow;
