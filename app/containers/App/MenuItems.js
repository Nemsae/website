import styled from 'styled-components';

import { squeezeIn } from 'utils/Keyframes';

const MenuItems = styled.ul.attrs({ className: 'menu-items' })`
  ${'' /* background: #fff; */}

  display: flex;
  flex-wrap: wrap;
  position: relative;

  ${'' /* animation: ${squeezeIn} 1100ms ease; */}
  max-width: 600px;
  max-height: 600px;
  width: 100%;
  height: 100%;

  list-style: none;

  margin: 0;
  padding: 0;

  transition: all 400ms;
`;

export default MenuItems;
