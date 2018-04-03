import styled from 'styled-components';

import { transitionAll400 } from 'utils/transitions';
import { squeezeIn } from 'utils/Keyframes';

const MenuItems = styled.ul.attrs({ className: 'menu-items' })`

  ${'' /* background: #fff; */}
  ${'' /* animation: ${squeezeIn} 1100ms ease; */}

  display: flex;
  flex-wrap: wrap;
  ${'' /* position: relative; */}
  max-width: 600px;
  max-height: 600px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;

  list-style: none;

  margin: 0;
  padding: 0;

  ${transitionAll400}

  ${'' /* position: absolute;
  bottom: 50px;
  right: 50px;

  max-width: 100px;
  max-height: 100px; */}
`;

export default MenuItems;
