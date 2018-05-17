import styled from 'styled-components';

import { transitionAll } from 'utils/transitions';
// import { squeezeIn } from 'utils/Keyframes';

const MenuItems = styled.ul.attrs({ className: 'menu-items' })`
  ${''/* animation: ${squeezeIn} 1100ms ease; */}
  display: flex;
  flex-wrap: wrap;
  width: 70.71vh;
  height: 70.71vh;
  ${'' /* width: 60rem;
  height: 60rem; */}

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  ${'' /* width: 100%;
  height: 100%; */}

  list-style: none;

  margin: 0;
  padding: 0;

  ${transitionAll(400)}

  background: rgba(0, 0, 0, 0.6);
`;

export default MenuItems;
