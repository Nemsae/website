import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { transitionAll } from 'utils/transitions';

// import keyframes from 'styled-components';

export const invert = (bool) => {
  let keyFrame;
  if (bool) {
    keyFrame = keyframes`
      from {
        background: #FFF;
      }

      to {
        background: var(--black);
      }
    `;
  } else {
    keyFrame = keyframes`
      from {
        background: var(--black);
      }

      to {
        background: #FFF;
      }
    `;
  }

  return keyFrame;
};

class HeaderBreadCrumb extends React.PureComponent {
  render() {
    // console.log('<HeaderBreadCrumb />     rendered!');    //  eslint-disable-line no-console
    const HeaderBreadCrumbPrimitive = styled.div.attrs({ className: 'header-bar' })`
      position: absolute;
      bottom: -1rem;
      left: 3rem;
      z-index: 3;

      font-size: 4rem;
      font-weight: 100;
      transform: rotate(270deg);
      transform-origin: 0 0;

      ${transitionAll(400)}

      isolation: isolate;
      background: #FFF;
      animation: ${invert(false)} 600ms;
      ${'' /* animation-fill-mode: both; */}
      ${this.props.inverted && `
        background: var(--black);
        animation: ${invert(true)} 1400ms;
        animation-fill-mode: both;
      `}

      ${this.props.strikeThrough && `
        .crumb-current {
          text-decoration: line-through;
        }
      `}
    `;
    return <HeaderBreadCrumbPrimitive>{ this.props.children }</HeaderBreadCrumbPrimitive>;
  }
}

HeaderBreadCrumb.propTypes = {
  children: PropTypes.any,
  strikeThrough: PropTypes.bool,
  inverted: PropTypes.bool,
};

export default HeaderBreadCrumb;
