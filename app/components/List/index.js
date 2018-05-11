import styled from 'styled-components';

// NOTE: This should be a HOC that will take in the list items as a prop and map them out.
//       If there is no items in the list, display a diff component. Likewise for data fetching errors.

const List = styled.ul.attrs({ className: 'list' })`
  list-style-type: none;
  padding: 0;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;

  min-width: 40rem;

  &.white {
    border-top: 0.2rem solid var(--white);
  }
  &.black {
    border-top: 0.2rem solid var(--black);
  }

  ${'' /* &.centered {
    align-self: center;
  }

  &.offset {
    align-self: flex-end;
    text-align: right;

    .section-list__item {
      align-items: flex-end;
    }
  } */}
`;

export default List;
