import React from 'react';

import NormalTextArea from 'components/TextArea';
import SVGQuoteLeft from 'components/SVGQuoteLeft';
import SVGQuoteRight from 'components/SVGQuoteRight';

import Wrapper from './Wrapper';

const TextAreaStyledPrimitive = NormalTextArea.extend.attrs({ className: 'textarea--styled' })`
  &.white {
    svg {
      color: var(--white);
    }
  }
  &.black {
    svg {
      color: var(--black);
    }
  }
`;

const TextAreaStyled = (props) => (
  <Wrapper {...props}>
    <TextAreaStyledPrimitive {...props} />
    <SVGQuoteLeft />
    <SVGQuoteRight />
  </Wrapper>
);

export default TextAreaStyled;
