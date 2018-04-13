import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';

export const EyebrowPrimitive = styled.div.attrs({ className: 'eyebrow' })`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: absolute;
  left: 100px;
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
  }
`;

const Eyebrow = () => (
  <Wrapper>
    <EyebrowPrimitive />
  </Wrapper>
);

export default Eyebrow;
