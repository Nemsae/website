import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fadeIn, opacityIn } from 'utils/keyFrames';

const ContentTextPrimitive = styled.div`
  opacity: 0;
  animation: ${fadeIn('top')} 1400ms 2800ms, ${opacityIn()} 700ms 2800ms;
  animation-fill-mode: forwards;

  font-size: 2rem;

  a {}
`;

const ContentText = (props) => (
  <ContentTextPrimitive {...props}>{ props.children }</ContentTextPrimitive>
);


ContentText.propTypes = {
  children: PropTypes.any,
};

export default ContentText;
