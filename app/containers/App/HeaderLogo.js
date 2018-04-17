import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderLogo = (props) => {
  const HeaderLogoPrimitive = styled.div.attrs({ className: 'header-title' })`
    border: 1px solid #000;
    line-height: 40px;
    height: 40px;
    width: 40px;

    font-size: 2em;
    font-family: 'Montserrat';
    text-align: center;

    position: absolute;
    top: 40px;
    left: 40px;
    z-index: 3;

    ${props.inverted && `
      border-color: white;
      .link-text {
        color: white;
      }
    `}

    text-transform: uppercase;
  `;
  return <HeaderLogoPrimitive {...props}>{ props.children }</HeaderLogoPrimitive>;
};

HeaderLogo.propTypes = {
  children: PropTypes.any,
  inverted: PropTypes.bool,
};

export default HeaderLogo;
