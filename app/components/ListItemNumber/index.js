import styled from 'styled-components';

const ListItemNumber = styled.span.attrs({ className: 'list__item__number' })`
  font-size: 2rem;
  font-family: serif;

  transition: all 200ms;

  &.pos-left {
    position: absolute;
    left: -6rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default ListItemNumber;
