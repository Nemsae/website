import styled from 'styled-components';

const Footer = styled.div`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 6rem;

  background: var(--white);
  color: var(--black);

  max-height: 6rem;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export default Footer;
