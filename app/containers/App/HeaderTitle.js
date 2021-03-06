import styled from 'styled-components';

const HeaderTitle = styled.h1.attrs({ className: 'header-title' })`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;

  text-transform: uppercase;
`;

export default HeaderTitle;
