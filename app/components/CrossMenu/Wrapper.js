import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// class CrossMenu extends React.PureComponent {
const CrossMenu = (props) => {
  const CrossMenuPrimitive = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${!props.active && `
      .menu-items {
        position: absolute;
        bottom: 50px;
        right: 50px;

        max-width: 100px;
        max-height: 100px;

        .nav-link_styled {
          opacity: 0;
        }

        .bullet-link {
          height: 20px;
          width: 20px;

          // right: -40px;
        }
      }
    `}
  `;

  return (
    <CrossMenuPrimitive>{ props.children }</CrossMenuPrimitive>
  );
};

CrossMenu.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
};

export default CrossMenu;
