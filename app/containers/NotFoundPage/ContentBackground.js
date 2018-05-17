import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fadeIn, opacityIn } from 'utils/keyFrames';

const ContentBackgroundPrimitive = styled.div`
  opacity: 0;
  animation: ${fadeIn('top')} 1400ms 2000ms, ${opacityIn()} 700ms 2000ms;
  animation-fill-mode: forwards;

  position: absolute;
  right: 31rem;
  bottom: 42rem;
`;

const ContentBackground = (props) => (
  <ContentBackgroundPrimitive {...props}>{ props.children }</ContentBackgroundPrimitive>
);


ContentBackground.propTypes = {
  children: PropTypes.any,
};

export default ContentBackground;
