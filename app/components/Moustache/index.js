import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

export const MoustachePrimitive = styled.div.attrs({ className: 'moustache' })`
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  position: absolute;
  left: 10rem;
  color: var(--black);
  box-shadow:
    15rem 24rem 0 0 currentColor,
    30rem 24rem 0 0 currentColor;

  ::before {
    content: '';
    position:absolute;
    left: 3rem;
    top: 12rem;
    width: 21rem;
    height: 12rem;
    border-bottom: solid 18rem currentColor;
    border-radius: 0 0 0 100%;
    transform: rotate(-40deg);
    transform-origin: right 21rem;
  }
  ::after {
    content: '';
    position:absolute;
    left: 3rem;
    top: 12rem;
    width: 21rem;
    height: 12rem;
    border-bottom: solid 18rem currentColor;
    border-radius: 0 0 100% 0;
    transform: rotate(40deg);
    transform-origin: right 21rem;
  }
`;

const Moustache = () => (
  <Wrapper>
    <MoustachePrimitive />
  </Wrapper>
);

export default Moustache;
