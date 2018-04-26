import styled from 'styled-components';

const SectionList = styled.ul.attrs({ className: 'section-list' })`
  list-style-type: none;
  padding: 0;
  margin: 5rem auto;

  &.centered {
    align-self: center;
  }

  &.offset {
    align-self: flex-end;
    text-align: right;

    .section-list__item {
      align-items: flex-end;
    }
  }
`;

export default SectionList;
