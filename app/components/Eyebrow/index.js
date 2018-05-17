import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { blink, browRaise1, browRaise2 } from './keyFrames';
import Wrapper from './Wrapper';

export const EyebrowPrimitive = styled.div`
  width: 16rem;
  height: 16rem;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  box-shadow:
    12rem 24rem 0 0 currentColor;

  ::before {
    content: '';
    position:absolute;
    left: 3rem;
    top: 58px;
    width: 21rem;
    height: 12rem;
    border-bottom: solid 8rem currentColor;
    border-radius: 0 0 0 100%;
    transform: rotate(-50deg);
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

  &.animate-enable {
    animation: ${blink} 8s 1400ms infinite;
    ::before {
      animation: ${browRaise2} 8s 1400ms infinite alternate;
    }
    ::after {
      animation: ${browRaise1} 8s 1400ms infinite alternate;
    }
  }

  ${'' /* animation-name: ${blink};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards; */}
`;

const Eyebrow = (props) => (
  <Wrapper>
    <EyebrowPrimitive className={props.animate ? 'eyebrow animate-enable' : 'eyebrow animate-disable'} />
  </Wrapper>
);

Eyebrow.propTypes = {
  animate: PropTypes.bool,
};

export default Eyebrow;
