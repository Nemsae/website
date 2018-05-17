import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { fadeIn, opacityIn } from 'utils/keyFrames';

export const IconTab = (props) => {
  const IconTabPrimitive = styled.a.attrs({ className: 'icon-tab' })`
    ${'' /* display: flex;
    justify-content: center;
    align-items: center; */}

    cursor: pointer;

    text-decoration: none;
    color: #d0e0ef;

    width: 100%;
    height: 10rem;

    background-color: pink;
    color: white;

    transition: all 400ms;
    :hover {
      background-color: var(--white);
      color: pink;
    }
  `;
  return (
    <IconTabPrimitive {...props}>{ props.children }</IconTabPrimitive>
  );
};

IconTab.propTypes = {
  children: PropTypes.any,
  // delay: PropTypes.number,
};

export default IconTab;
