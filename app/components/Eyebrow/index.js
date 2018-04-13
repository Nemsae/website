import React from 'react';
import styled from 'styled-components';

import { blink, browRaise1, browRaise2 } from './keyFrames';
import Wrapper from './Wrapper';

export const EyebrowPrimitive = styled.div.attrs({ className: 'eyebrow' })`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  box-shadow:
    120px 240px 0 0 currentColor;

  ::before {
    content: '';
    position:absolute;
    left: 30px;
    top: 58px;
    width: 210px;
    height: 120px;
    border-bottom: solid 80px currentColor;
    border-radius: 0 0 0 100%;
    transform: rotate(-50deg);
    transform-origin: right 210px;
    animation: ${browRaise2} 8s infinite alternate;
  }
  ::after {
    content: '';
    position:absolute;
    left: 30px;
    top: 120px;
    width: 210px;
    height: 120px;
    border-bottom: solid 180px currentColor;
    border-radius: 0 0 100% 0;
    transform: rotate(40deg);
    transform-origin: right 210px;
    animation: ${browRaise1} 8s infinite alternate;
  }

  animation: ${blink} 8s infinite;
  ${'' /* animation-name: ${blink};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards; */}
`;

const Eyebrow = () => (
  <Wrapper>
    <EyebrowPrimitive />
  </Wrapper>
);

export default Eyebrow;
