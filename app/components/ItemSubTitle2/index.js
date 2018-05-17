import styled from 'styled-components';

const ItemSubTitle = styled.h3.attrs({ className: 'item-sub-title' })`
  font-size: 3.5rem;
  color: var(--white);
  background: var(--black);

  letter-spacing: 12px;

  margin: 5px rem;
  padding-left: 6rem;
`;

export default ItemSubTitle;
