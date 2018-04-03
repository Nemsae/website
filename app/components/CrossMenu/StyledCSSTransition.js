import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { transitionAll400 } from 'utils/transitions';

const StyledCSSTransition = (props) => {
  const StyledCSSTransitionPrimitive = styled(CSSTransition)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${transitionAll400}
    ${!props.active && `
      .menu-items {
        position: absolute;
        bottom: 50px;
        right: 50px;

        max-width: 100px;
        max-height: 100px;

        .link-text {
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

  return <StyledCSSTransitionPrimitive {...props}>{ props.children }</StyledCSSTransitionPrimitive>;
};

StyledCSSTransition.propTypes = {
  children: PropTypes.any,
  active: PropTypes.bool,
};

export default StyledCSSTransition;
