import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { panelMaximize,
  panelMinimize,
  panelTitleMaximize,
  panelTitleMinimize,
  panelInfoShow,
 } from 'utils/keyFrames';

const titleFontSize = '4vw';

const Panel = (props) => {
  const PanelPrimitive = styled.div.attrs({ className: 'panel' })`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    &.top {
      justify-content: flex-start;
      .panel__header {
        margin-top: 4rem;
      }
    }

    flex-grow: 1;
    ${'' /* height: 50%; */}
    ${'' /* height: 50%; */}
    ${'' /* height: 50%; */}
    ${'' /* height: 50%; */}
    ${'' /* height: 50%; */}

    cursor: pointer;
    transition: all 400ms;
    &:hover {
      .panel__title {
        font-size: ${titleFontSize};
      }
      .panel__number {
        font-size: 6vw;
      }
      .panel__info {

      }
    }

    animation: ${panelMinimize()} 600ms;
    animation-fill-mode: both;
    .panel__title {
      font-size: 2vw;
      color: var(--black);
      animation: ${panelTitleMinimize()} 600ms;
      animation-fill-mode: backwards;
    }
    .panel__info {
      animation: ${panelInfoShow(false)} 400ms 600ms var(--ease-in-quad);
      animation-fill-mode: both;
    }

    ${props.active && `
      cursor: default;

      :hover {

      }

      flex-grow: 10;
      min-width: 60vw;
      animation: ${panelMaximize()} 600ms var(--ease-out-quad);
      animation-fill-mode: both;

      .panel__info {
        opacity: 1;
        animation: ${panelInfoShow(true)} 400ms 600ms var(--ease-out-quad);
        animation-fill-mode: both;
      }

      .panel__title {
        font-size: ${titleFontSize};
        color: pink;
        animation: ${panelTitleMaximize()} 600ms var(--ease-out-quad);
        animation-fill-mode: backwards;
      }
    `}
  `;
  return (
    <PanelPrimitive {...props}>{props.children}</PanelPrimitive>
  );
};

Panel.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
};

export default Panel;
