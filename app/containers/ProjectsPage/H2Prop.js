import React from 'react';
import PropTypes from 'prop-types';
import NormalH2 from 'components/H2';

import { fadeIn, opacityIn } from 'utils/keyFrames';

const H2 = (props) => {
  const H2Primitive = NormalH2.extend`
    line-height: 1.1;

    opacity: 0;

    animation: ${fadeIn('left')} 1000ms 1000ms, ${opacityIn()} 1000ms 1000ms;
    animation-fill-mode: forwards;


    b {
      font-size: 5.2rem;
    }
  `;
  return <H2Primitive {...props}>{ props.children }</H2Primitive>;
};

H2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default H2;
