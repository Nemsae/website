import styled from 'styled-components';

const HeaderTitle = styled.h1.attrs({ className: 'header-title' })`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  text-transform: uppercase;
`;

export default HeaderTitle;
