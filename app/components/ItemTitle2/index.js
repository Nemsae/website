import styled from 'styled-components';

const ItemTitle = styled.h3.attrs({ className: 'item-title' })`
  font-size: 5rem;
  color: var(--white);
  background: var(--black);

  letter-spacing: 12px;

  margin: 0;
  padding-left: 5rem;
`;

export default ItemTitle;
