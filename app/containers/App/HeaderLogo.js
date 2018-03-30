import styled from 'styled-components';

const HeaderLogo = styled.div.attrs({ className: 'header-title' })`
  border: 1px solid #000;
  line-height: 40px;
  height: 40px;
  width: 40px;

  font-size: 2em;
  font-family: 'Montserrat';
  text-align: center;

  position: absolute;
  top: 40px;
  left: 40px;

  text-transform: uppercase;
`;

export default HeaderLogo;
