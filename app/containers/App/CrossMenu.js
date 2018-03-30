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
    `;

    return (
      <CrossMenuPrimitive>{ this.props.children }</CrossMenuPrimitive>
    );
  }
}

CrossMenu.propTypes = {
  children: PropTypes.any,
};

export default CrossMenu;
