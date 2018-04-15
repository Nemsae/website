import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fadeIn, opacityIn } from 'utils/keyFrames';

export const IconWrapper = (props) => {
  const IconWrapperPrimitive = styled.a.attrs({ className: 'icon-wrapper' })`
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    font-size: 4rem;
    text-decoration: none;
    color: #d0e0ef;

    width: 100%;
    height: 100%;

    transition: all 200ms;

    :hover {
      background-color: pink;
      color: white;
      ${'' /* border-left: 10px solid #fff; */}
      i {
        transform: scale(1.2);
      }
    }

    animation: ${fadeIn('bottom')} 1400ms ${1000 + (props.delay || 0)}ms var(--ease-out-quint), ${opacityIn()} 1400ms ${1000 + (props.delay || 0)}ms;
    animation-fill-mode: both;
  `;
  return (
    <IconWrapperPrimitive {...props}>{ props.children }</IconWrapperPrimitive>
  );
};

IconWrapper.propTypes = {
  children: PropTypes.any,
  delay: PropTypes.number,
};

export default IconWrapper;
