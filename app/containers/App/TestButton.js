import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = (props) => {
  const ButtonPrimitive = styled.div.attrs({ className: 'menu-trigger' })`
    position: absolute;

    right: 30px;
    bottom: 240px;

    text-transform: uppercase;
    padding: 10px 15px;

    border: 1px solid #1B1819;
  `;

  return <ButtonPrimitive {...props}>{ props.children }</ButtonPrimitive>;
};

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
