import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import BasicNavLink from './BasicNavLink';

const HeaderLogo = (props) => {
  const HeaderLogoPrimitive = BasicNavLink.extend.attrs({ className: 'link-text' })`
    border: 3px solid var(--black);
    height: 4.2rem;
    width: 4.2rem;

    overflow: hidden;

    position: absolute;
    top: 4rem;
    left: 3.8rem;
    z-index: 3;

    transition: all 400ms;
    :hover {
      transform: scale(1.2);
      border-color: var(--pink);
      .rixi-logo__wrapper {
        color: var(--pink);
      }
    }

    ${props.inverted && `
      border-color: var(--white);
      .link-text {
        color: var(--white);
      }
      .rixi-logo__wrapper {
        color: var(--white);
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
