import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { panelMaximize, panelMinimize, panelTitleMaximize, panelTitleMinimize } from 'utils/keyFrames';

const Panel = (props) => {
  const PanelPrimitive = styled.div.attrs({ className: 'panel' })`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    &.top {
      justify-content: flex-start;
    }

    flex-grow: 1;

    cursor: pointer;
    ${'' /* &:hover {
      background: pink;
    } */}

    animation: ${panelMinimize()} 600ms;
    animation-fill-mode: both;
    .panel__title {
      animation: ${panelTitleMinimize()} 600ms;
      animation-fill-mode: both;
    }

    ${props.active && `
      cursor: default;

      :hover {}

      animation: ${panelMaximize()} 600ms var(--ease-in-out-quad);
      animation-fill-mode: both;

      .panel__title {
        color: pink;

        animation: ${panelTitleMaximize()} 600ms var(--ease-in-out-quad);
        animation-fill-mode: both;
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
