import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Bullet = (props) => {
  const BulletPrimitive = styled.div.attrs({ className: 'bullet-link' })`
    width: 2rem;
    height: 2rem;

    position: absolute;

    ${props.left && 'left: -3rem;'}
    ${props.right && 'right: -3rem;'}

    background: var(--white);

    opacity: 1;
  `;

  return <BulletPrimitive {...props}>{ props.children }</BulletPrimitive>;
};

Bullet.propTypes = {
  children: PropTypes.any,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

export default Bullet;
