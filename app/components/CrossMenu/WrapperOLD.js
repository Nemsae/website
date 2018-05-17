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
          bottom: 5rem;
          right: 5rem;

          max-width: 10rem;
          max-height: 10rem;

          .link-text {
            opacity: 0;
          }

          .bullet-link {
            height: 2rem;
            width: 2rem;

            // right: -4rem;
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
