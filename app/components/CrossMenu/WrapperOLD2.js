import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { transitionAll400 } from 'utils/transitions';

//  NOTE: cross-menu-entering is for first mount

// class CrossMenu extends React.PureComponent {
const CrossMenu = (props) => {
  const CrossMenuPrimitive = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.cross-menu-exiting {}
    &.cross-menu-exited {}
    &.cross-menu-entering {}
    &.cross-menu-entered {}

    ${transitionAll400}

    ${''/*  MINIMIZED state - put it back */}

    ${!props.active && `
      // .menu-items {
      //   position: absolute;
      //   left: auto;
      //   top: auto;
      //   bottom: 50px;
      //   right: 50px;
      //
      //   max-width: 100px;
      //   max-height: 100px;
      //
      //   .link-text {
      //     opacity: 0;
      //   }
      //
      //   .bullet-link {}
      // }

      // &.cross-menu-entered {
      //   .menu-items {
      //     position: absolute;
      //     left: auto;
      //     top: auto;
      //     bottom: 50px;
      //     right: 50px;
      //
      //     max-width: 100px;
      //     max-height: 100px;
      //
      //     .link-text {
      //       opacity: 0;
      //     }
      //
      //     .bullet-link {}
      //   }
      // }
      // &.cross-menu-entering {
      //   .menu-items {
      //     // position: relative;
      //     bottom: auto;
      //     right: auto;
      //     left: 50%;
      //     top: 50%;
      //     transform: translate(-50%, -50%);
      //
      //     max-width: 600px;
      //     max-height: 600px;
      //
      //     .link-text {
      //       opacity: 1;
      //     }
      //
      //     .bullet-link {}
      //   }
      // }
    `}
  `;

  return (
    /* eslint-disable */
    <CrossMenuPrimitive {...props} ref={(node) => props.self.wrapper = node}>{ props.children }</CrossMenuPrimitive>
    /* eslint-enable */
  );
};

CrossMenu.propTypes = {
  children: PropTypes.any,
  self: PropTypes.any,
  active: PropTypes.bool,
};

export default CrossMenu;
