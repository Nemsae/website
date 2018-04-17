import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transitionAll } from 'utils/transitions';

const HeaderBreadCrumb = (props) => {
  const HeaderBreadCrumbPrimitive = styled.div.attrs({ className: 'header-bar' })`
    position: absolute;
    bottom: -1rem;
    left: 3rem;
    z-index: 3;

    font-size: 4rem;
    transform: rotate(270deg);
    transform-origin: 0 0;

    ${transitionAll(400)}

    ${props.inverted ? `
      color: #fff;
    ` : `
      color: #000;
    `}

    ${props.strikeThrough && `
      .crumb-current {
        text-decoration: line-through;
      }
    `}
  `;
  return <HeaderBreadCrumbPrimitive>{ props.children }</HeaderBreadCrumbPrimitive>;
};

HeaderBreadCrumb.propTypes = {
  children: PropTypes.any,
  strikeThrough: PropTypes.bool,
  inverted: PropTypes.bool,
};

export default HeaderBreadCrumb;
