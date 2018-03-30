import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transitionAll400 } from 'utils/transitions';

const HeaderBreadCrumb = (props) => {
  const HeaderBreadCrumbPrimitive = styled.div.attrs({ className: 'header-bar' })`
    position: absolute;
    bottom: 40px;
    left: 40px;

    font-size: 40px;

    ${transitionAll400}
    ${props.strikeThrough && `
      b {
        text-decoration: line-through;
      }
    `}
  `;
  return <HeaderBreadCrumbPrimitive>{ props.children }</HeaderBreadCrumbPrimitive>;
};

HeaderBreadCrumb.propTypes = {
  children: PropTypes.string,
  strikeThrough: PropTypes.bool,
};

export default HeaderBreadCrumb;
