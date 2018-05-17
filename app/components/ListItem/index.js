import styled from 'styled-components';

const ListItem = styled.li.attrs({ className: 'list__item' })`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  margin: 1rem -1rem;
  padding: 1rem;

  cursor: pointer;

  &:first-child {
    margin-top: 2rem;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    .list__item__number {
      color: var(--pink);
      transform: translateY(-50%) scale(1.5);
    }
  }
`;

export default ListItem;
