import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = (props) => {
  const ButtonPrimitive = styled.div.attrs({ className: 'menu-trigger' })`
    position: absolute;
    right: 3rem;
    bottom: 18rem;
    z-index: 3;


    text-transform: uppercase;
    padding: 1rem 15px;

    border: 1px solid var(--black);
  `;

  return <ButtonPrimitive {...props}>{ props.children }</ButtonPrimitive>;
};

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
