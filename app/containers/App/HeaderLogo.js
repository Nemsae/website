import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import BasicNavLink from './BasicNavLink';

const HeaderLogo = (props) => {
  const HeaderLogoPrimitive = BasicNavLink.extend.attrs({ className: 'link-text' })`
    border: 1px solid var(--black);
    line-height: 4rem;
    height: 4rem;
    width: 4rem;

    font-size: 2em;
    font-family: 'Montserrat';
    text-align: center;

    position: absolute;
    top: 4rem;
    left: 4rem;
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
