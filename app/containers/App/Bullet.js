import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Bullet = (props) => {
  const BulletPrimitive = styled.div.attrs({ className: 'bullet-link' })`
    width: 20px;
    height: 20px;
    ${'' /* border-radius: 10px; */}

    position: absolute;

    ${props.left && 'left: -30px;'}
    ${props.right && 'right: -30px;'}

    background: #000;

    opacity: 1;
    transition: all 200ms;
  `;

  return <BulletPrimitive>{ props.children }</BulletPrimitive>;
};

Bullet.propTypes = {
  children: PropTypes.any,
  left: PropTypes.boolean,
  right: PropTypes.boolean,
};

export default Bullet;
