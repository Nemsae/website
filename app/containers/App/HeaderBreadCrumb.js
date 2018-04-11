import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transitionAll } from 'utils/transitions';

const HeaderBreadCrumb = (props) => {
  const HeaderBreadCrumbPrimitive = styled.div.attrs({ className: 'header-bar' })`
    position: absolute;
    bottom: 40px;
    left: 40px;
    z-index: 3;

    font-size: 40px;

    ${'' /* b::first-letter {
      color: #FEC0C1;
    } */}

    ${transitionAll(400)}
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
};

export default HeaderBreadCrumb;
