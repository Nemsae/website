import styled from 'styled-components';

// NOTE: This should be a HOC that will take in the list items as a prop and map them out.
//       If there is no items in the list, display a diff component. Likewise for data fetching errors.

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
