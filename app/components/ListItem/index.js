import styled from 'styled-components';

const ListItem = styled.li.attrs({ className: 'list__item' })`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  margin: 1rem 0;

  &:first-child {
    margin-top: 2rem;
  }
`;

export default ListItem;
