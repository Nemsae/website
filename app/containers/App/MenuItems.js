import styled from 'styled-components';

import { squeezeIn } from 'utils/Keyframes';

const MenuItems = styled.ul`
  ${'' /* background: #fff; */}

  display: flex;
  flex-wrap: wrap;
  position: relative;

  animation: ${squeezeIn} 1100ms ease;
  max-width: 600px;
  max-height: 600px;
  width: 100%;
  height: 100%;

  list-style: none;

  margin: 0;
  padding: 0;

  ${'' /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */}
`;

export default MenuItems;
