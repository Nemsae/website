import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const A = (props) => {
  const APrimitive = styled.a.attrs({ className: `${props.className ? props.className : ''}` })`
    display: flex;
    color: #1B1819;

    &:visited {
      color: #1B1819;
    }

    ${props.isActive && `
      color: #fff;
    `}
  `;

  return <APrimitive {...props}>{props.children}</APrimitive>;
};

A.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

export default A;
