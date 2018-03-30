import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class CrossMenu extends React.PureComponent {
  render() {
    const CrossMenuPrimitive = styled.nav`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      ${!this.props.active && `
        .menu-items {
          position: absolute;
          bottom: 0;
          right: 0;

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
      <CrossMenuPrimitive>{ this.props.children }</CrossMenuPrimitive>
    );
  }
}

CrossMenu.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
};

export default CrossMenu;
