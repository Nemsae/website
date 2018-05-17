import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { blink, browRaise1, browRaise2 } from './keyFrames';
import SubWrapper from './SubWrapper';
import Wrapper from './Wrapper';

export const RixiLogoPrimitive = styled.div.attrs({ className: 'rixi-logo__primitive' })`
  width: 8rem;
  height: 26rem;
  border-radius: 0% 110% 0% 40%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  ${'' /* color: var(--black); */}
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

  &.animate-enable {}

  transform: scale(0.10);
`;

const RixiLogo = (props) => (
  <Wrapper>
    <SubWrapper>
      <RixiLogoPrimitive className={props.animate ? 'rixi-logo animate-enable' : 'rixi animate-disable'} />
    </SubWrapper>
  </Wrapper>
);

RixiLogo.propTypes = {
  animate: PropTypes.bool,
};

export default RixiLogo;
