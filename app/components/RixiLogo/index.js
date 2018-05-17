import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { blink, browRaise1, browRaise2 } from './keyFrames';
import Wrapper from './Wrapper';

export const RixiLogoPrimitive = styled.div`
  width: 79px;
  height: 26rem;
  border-radius: 0% 110% 0% 40%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  box-shadow: 155px 157px 0 0 currentColor;

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
    animation: ${blink} 8s infinite;
    ::before {
      animation: ${browRaise2} 8s infinite alternate;
    }
    ::after {
      animation: ${browRaise1} 8s infinite alternate;
    }
  }
`;

const RixiLogo = (props) => (
  <Wrapper>
    <RixiLogoPrimitive className={props.animate ? 'rixi-logo animate-enable' : 'rixi animate-disable'} />
  </Wrapper>
);

RixiLogo.propTypes = {
  animate: PropTypes.bool,
};

export default RixiLogo;
